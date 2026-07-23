import { RawDataStatus } from "../generated/prisma/index.js";
import {
  RawRepository,
  type PaginationOptions,
} from "../repositories/raw.repository.js";
import {
  YahooClientService,
  type FetchOHLCVOptions,
} from "./yahoo-client.service.js";
import { BinanceClientService } from "./binance-client.service.js";
import type { OHLCVProvider } from "../interfaces/ohlcv-provider.interface.js";

export type ProviderType = "yahoo" | "binance";

export class RawDataIngestionService {
  private providers: Record<ProviderType, OHLCVProvider>;
  private rawRepository: RawRepository;

  constructor(rawRepository = new RawRepository()) {
    this.rawRepository = rawRepository;
    this.providers = {
      yahoo: new YahooClientService(),
      binance: new BinanceClientService(),
    };
  }

  async ingestData(
    providerName: ProviderType,
    dataSourceId: string,
    symbol: string,
    options: FetchOHLCVOptions = {},
  ) {
    const provider = this.providers[providerName];
    if (!provider) {
      throw new Error(`Provider '${providerName}' tidak didukung.`);
    }
    try {
      const ohlcvData = await provider.getOHLCV(symbol, options);

      const rawRecord = await this.rawRepository.create({
        datasourceId: dataSourceId,
        payload: ohlcvData as any,
        status: RawDataStatus.PENDING,
      });

      return rawRecord;
    } catch (error) {
      console.error(
        `[DataIngestionService] Ingestion failed for DataSource ${dataSourceId} (${symbol}):`,
        error,
      );
      throw error;
    }
  }

  // 2. Query Methods
  async getRawDataById(id: string) {
    return await this.rawRepository.findById(id);
  }

  async getPaginatedRawData(options: PaginationOptions) {
    return await this.rawRepository.findWithPagination(options);
  }

  async getRawDataByDatasource(dataSourceId: string, limit?: number) {
    return await this.rawRepository.findByDatasource(dataSourceId, limit);
  }

  async updateRawStatus(id: string, status: RawDataStatus) {
    const exists = await this.rawRepository.exists(id);
    if (!exists) throw new Error(`RawData dengan ID ${id} tidak ditemukan`);

    return await this.rawRepository.updateStatus(id, status);
  }

  async deleteRawData(id: string) {
    const exists = await this.rawRepository.exists(id);
    if (!exists) throw new Error(`RawData dengan ID ${id} tidak ditemukan`);

    return await this.rawRepository.deleteRawData(id);
  }
}
