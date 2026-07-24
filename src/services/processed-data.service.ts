import { RawDataStatus } from "../generated/prisma/index.js";
import { RawRepository } from "../repositories/raw.repository.js";
import {
  ProcessedDataRepository,
  type CreateProcessedDataDto,
} from "../repositories/processed-data.repository.js";
import type { OHLCVRes } from "../types/types.js";

export class ProcessedDataService {
  private rawRepository: RawRepository;
  private processedDataRepository: ProcessedDataRepository;

  constructor(
    rawRepository = new RawRepository(),
    processedDataRepository = new ProcessedDataRepository(),
  ) {
    this.rawRepository = rawRepository;
    this.processedDataRepository = processedDataRepository;
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
      throw error;
    }
  }
}
