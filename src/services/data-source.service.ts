import { DataSourceType } from "../generated/prisma/index.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";

export class DataSourceService {
  private dataSourceRepository: DataSourceRepository;

  constructor(dataSourceRepository = new DataSourceRepository()) {
    this.dataSourceRepository = dataSourceRepository;
  }

  async create(
    name: string,
    type: DataSourceType,
    connection: string,
    baseURL: string,
  ) {
    try {
      const dataSourceRecord = await this.dataSourceRepository.create({
        name: name,
        type: type,
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
}
