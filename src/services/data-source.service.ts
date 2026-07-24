import { DataSourceType } from "../generated/prisma/index.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
import type { ProviderType } from "../types/types.js";

export class DataSourceService {
  private dataSourceRepository: DataSourceRepository;

  constructor(dataSourceRepository = new DataSourceRepository()) {
    this.dataSourceRepository = dataSourceRepository;
  }

  async create(
    name: string,
    type: DataSourceType,
    provider:ProviderType,
    connection: string,
    baseURL: string,
  ) {
    try {
      const dataSourceRecord = await this.dataSourceRepository.create({
        name: name,
        type: type,
        provider:provider,
        connection: connection,
        baseURL: baseURL,
      });

      return dataSourceRecord;
    } catch (error) {
      console.error(
        `[DataSourceService] Ingestion failed create DataSource :`,
        error,
      );
      throw error;
    }
  }

  async getAllDataSources() {
    return await this.dataSourceRepository.findAll();
  }

  
    async getDataSourcesById(id: string) {
    return await this.dataSourceRepository.findById(id);
  }

  async getDataSourcesByName(name: string) {
    return await this.dataSourceRepository.findByName(name);
  }

  async updateDataSources(id: string, isActive: boolean) {
    return await this.dataSourceRepository.update(id, isActive);
  }
}
