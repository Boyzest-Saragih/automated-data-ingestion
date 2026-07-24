import { prisma } from "../config/prisma.js";
import { type Symbol } from "../generated/prisma/index.js";

export type CreateSymbolDto = {
  dataSourceId: string;
  ticker: string;
  name?: string;
  defaultInterval?: string;
  isActive?: boolean;
};

export class SymbolRepository {
  async create(data: CreateSymbolDto): Promise<Symbol> {
    try {
      return await prisma.symbol.create({
        data: {
          dataSourceId: data.dataSourceId,
          ticker: data.ticker.toUpperCase(),
          name: data.name ?? null,
          defaultInterval: data.defaultInterval || "1d",
          isActive: data.isActive ?? true,
        },
      });
    } catch (error) {
      console.error("[SymbolRepository] Error creating symbol:", error);
      throw error;
    }
  }

  async findByDataSource(dataSourceId: string): Promise<Symbol[]> {
    return await prisma.symbol.findMany({
      where: { dataSourceId },
      orderBy: { ticker: "asc" },
    });
  }

  async findByDataSourceAndTicker(
    dataSourceId: string,
    symbol: string,
  ): Promise<Symbol | null> {
    return await prisma.symbol.findFirst({
      where: { dataSourceId, symbol },
      orderBy: { ticker: "asc" },
    });
  }

  /**
   * ⚡ QUERY UTAMA UNTUK SCHEDULER:
   * Mengambil semua Symbol yang AKTIF berserta DataSource-nya yang juga AKTIF.
   */
  async findActiveSymbolsForIngestion() {
    try {
      return await prisma.symbol.findMany({
        where: {
          isActive: true,
          dataSource: {
            isActive: true,
          },
        },
        include: {
          dataSource: true, // Join ke DataSource untuk ambil provider & baseURL
        },
      });
    } catch (error) {
      console.error("[SymbolRepository] Error fetching active symbols:", error);
      throw error;
    }
  }

  async updateStatus(id: string, isActive: boolean): Promise<Symbol> {
    return await prisma.symbol.update({
      where: { id },
      data: { isActive },
    });
  }

  async delete(id: string): Promise<Symbol> {
    return await prisma.symbol.delete({
      where: { id },
    });
  }
}
