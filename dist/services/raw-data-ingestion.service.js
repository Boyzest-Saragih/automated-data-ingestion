import { RawDataStatus } from "../generated/prisma/index.js";
import { RawRepository, } from "../repositories/raw.repository.js";
import { YahooClientService } from "./yahoo-client.service.js";
import { BinanceClientService } from "./binance-client.service.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
import { ProcessedDataService } from "./processed-data.service.js";
export class RawDataIngestionService {
    providers;
    rawRepository;
    dataSourceRepository;
    processedDataService;
    constructor(rawRepository = new RawRepository(), dataSourceRepository = new DataSourceRepository(), processedDataService = new ProcessedDataService()) {
        this.rawRepository = rawRepository;
        this.dataSourceRepository = dataSourceRepository;
        this.processedDataService = processedDataService;
        this.providers = {
            yahoo: new YahooClientService(),
            binance: new BinanceClientService(),
        };
    }
    async ingestData(providerName, dataSourceId, symbol, options = {}) {
        const dataSource = await this.dataSourceRepository.findById(dataSourceId);
        const provider = this.providers[providerName];
        if (!dataSource) {
            throw new Error(`DataSource dengan ID ${dataSourceId} tidak ditemukan.`);
        }
        if (!dataSource.isActive) {
            throw new Error(`DataSource '${dataSource.name}' (ID: ${dataSourceId}) sedang tidak aktif / dinonaktifkan.`);
        }
        if (!provider) {
            throw new Error(`Provider '${providerName}' tidak didukung.`);
        }
        try {
            const ohlcvData = await provider.getOHLCV(symbol, options, {
                baseURL: dataSource.baseURL,
                connection: dataSource.connection,
            });
            const rawRecord = await this.rawRepository.create({
                datasourceId: dataSourceId,
                payload: ohlcvData,
                status: RawDataStatus.PENDING,
            });
            await this.processedDataService.processRawData(rawRecord.id);
            return rawRecord;
        }
        catch (error) {
            console.error(`[DataIngestionService] Ingestion failed for DataSource ${dataSourceId} (${symbol}):`, error);
            throw error;
        }
    }
    async getRawDataById(id) {
        return await this.rawRepository.findById(id);
    }
    async getPaginatedRawData(options) {
        return await this.rawRepository.findWithPagination(options);
    }
    async getRawDataByDatasource(dataSourceId, limit) {
        return await this.rawRepository.findByDatasource(dataSourceId, limit);
    }
    async updateRawStatus(id, status) {
        const exists = await this.rawRepository.exists(id);
        if (!exists)
            throw new Error(`RawData dengan ID ${id} tidak ditemukan`);
        return await this.rawRepository.updateStatus(id, status);
    }
}
//# sourceMappingURL=raw-data-ingestion.service.js.map