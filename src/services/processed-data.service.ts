import { RawDataStatus } from "../generated/prisma/index.js";
import { RawRepository } from "../repositories/raw.repository.js";
import {
  ProcessedDataRepository,
  type CreateProcessedDataDto,
  type FindCandlesQuery,
} from "../repositories/processed-data.repository.js";
import type { OHLCVRes } from "../types/types.js";
import { AuditLogService } from "./audit-log.service.js";

export class ProcessedDataService {
  private rawRepository: RawRepository;
  private processedDataRepository: ProcessedDataRepository;
  private auditLogService: AuditLogService;

  constructor(
    rawRepository = new RawRepository(),
    processedDataRepository = new ProcessedDataRepository(),
    auditLogService = new AuditLogService(),
  ) {
    this.rawRepository = rawRepository;
    this.processedDataRepository = processedDataRepository;
    this.auditLogService = auditLogService;
  }

  async processRawData(rawDataId: string) {
    const rawRecord = await this.rawRepository.findById(rawDataId);

    if (!rawRecord) {
      throw new Error(`RawData dengan ID ${rawDataId} tidak ditemukan.`);
    }

    try {
      const payload = rawRecord.payload as unknown as OHLCVRes;
      if (!payload || !payload.candles || !Array.isArray(payload.candles)) {
        throw new Error(
          `Payload JSON pada RawData ID ${rawDataId} tidak valid.`,
        );
      }

      const candleToUpsert: CreateProcessedDataDto[] = payload.candles.map(
        (candle) => ({
          rawDataId: rawRecord.id,
          symbol: payload.symbol.toUpperCase(),
          granularity: payload.granularity,
          timestamp: new Date(candle.timestamp),
          open: candle.open,
          high: candle.high,
          low: candle.low,
          close: candle.close,
          volume: candle.volume,
        }),
      );

      const result =
        await this.processedDataRepository.upsertMany(candleToUpsert);

      await this.rawRepository.updateStatus(
        rawRecord.id,
        RawDataStatus.SUCCESS,
      );

      await this.auditLogService.logSuccess(
        "PROCESS_RAW_DATA",
        "ProcessedData",
        `Berhasil memproses ${result.length} candle untuk ${payload.symbol}`,
        {
          symbol: payload.symbol,
          count: result.length,
          granularity: payload.granularity,
        },
        rawRecord.id,
      );

      return {
        success: true,
        rawDataId: rawRecord.id,
        processedCount: result.length,
      };
    } catch (error) {
      await this.rawRepository.updateStatus(rawRecord.id, RawDataStatus.FAILED);
      console.error(
        `[DataProcessorService] Gagal memproses RawData ID ${rawDataId}:`,
        error,
      );
      await this.auditLogService.logError(
        "PROCESS_RAW_DATA",
        "RawData",
        `Gagal memproses RawData ID: ${rawDataId}`,
        error,
        rawDataId,
      );
      throw error;
    }
  }

  async getCandles(query: FindCandlesQuery) {
    return await this.processedDataRepository.findCandles(query);
  }

  async getLatestCandle(symbol: string, granularity: string) {
    return await this.processedDataRepository.findLatestCandle(
      symbol,
      granularity,
    );
  }
}
