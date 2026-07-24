import { type DataSource } from "../generated/prisma/index.js";
import { DataSourceType } from "../generated/prisma/index.js";
import { prisma } from "../config/prisma.js";

type createDataSourceDto = {
  name: string;
  type: DataSourceType;
  connection?: string | null;
  baseURL: string;
};

export class DataSourceRepository {
  async create(data: createDataSourceDto): Promise<DataSource> {
    try {
      return await prisma.dataSource.create({
        data: {
          name: data.name,
          type: data.type,
          connection: data.connection ?? null,
          baseURL: data.baseURL,
        },
      });
    } catch (error) {
      console.log("Error createin raw data : ", error);
      throw error;
    }
  }

  async findAll(): Promise<DataSource[]> {
    try {
      return await prisma.dataSource.findMany();
    } catch (error) {
      console.error("Error fetching all data source : ", error);
      throw error;
    }
  }

  async findById(id: string): Promise<DataSource | null> {
    try {
      return await prisma.dataSource.findFirst({
        where: { id },
      });
    } catch (error) {
      console.error("Error get data source by id: ", error);
      throw error;
    }
  }

  async findByName(name: string): Promise<DataSource | null> {
    try {
      return await prisma.dataSource.findFirst({
        where: { name },
      });
    } catch (error) {
      console.error("Error get data source by name: ", error);
      throw error;
    }
  }

  async update(id: string, isActive: boolean): Promise<DataSource> {
    try {
      return await prisma.dataSource.update({
        where: { id },
        data: { isActive },
      });
    } catch (error) {
      console.error("Error update data source: ", error);
      throw error;
    }
  }

  async delete(id: string): Promise<DataSource> {
    try {
      return await prisma.dataSource.delete({ where: { id } });
    } catch (error) {
      console.error("Error delete data source: ", error);
      throw error;
    }
  }
}
