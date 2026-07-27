import { DataSourceType } from "../generated/prisma/index.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
export class DataSourceService {
    dataSourceRepository;
    constructor(dataSourceRepository = new DataSourceRepository()) {
        this.dataSourceRepository = dataSourceRepository;
    }
    async create(name, type, provider, connection, baseURL) {
        try {
            const dataSourceRecord = await this.dataSourceRepository.create({
                name: name,
                type: type,
                provider: provider,
                connection: connection,
                baseURL: baseURL,
            });
            return dataSourceRecord;
        }
        catch (error) {
            console.error(`[DataSourceService] Ingestion failed create DataSource :`, error);
            throw error;
        }
    }
    async getAllDataSources() {
        return await this.dataSourceRepository.findAll();
    }
    async getDataSourcesById(id) {
        return await this.dataSourceRepository.findById(id);
    }
    async getDataSourcesByName(name) {
        return await this.dataSourceRepository.findByName(name);
    }
    async updateDataSources(id, isActive) {
        return await this.dataSourceRepository.update(id, isActive);
    }
}
//# sourceMappingURL=data-source.service.js.map