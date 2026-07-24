import { prisma } from "../config/prisma.js";
import { type ProcessedData } from "../generated/prisma/index.js";

export type CreateProcessedDataDto = {
  rawDataId: string;
  symbol: string;
  granularity: string;
  timestamp: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type FindCandlesQuery = {
  symbol: string;
  granularity: string;
  from?: Date;
  to?: Date;
  limit?: number;
};

export class ProcessedDataRepository {
  async upsertMany(datas: CreateProcessedDataDto[]): Promise<ProcessedData[]> {
    try {
      const operations = datas.map((data) =>
        prisma.processedData.upsert({
          where: {
            symbol_granularity_timestamp: {
              symbol: data.symbol,
              granularity: data.granularity,
              timestamp: data.timestamp,
            },
          },
          create: {
            rawDataId: data.rawDataId,
            symbol: data.symbol,
            granularity: data.granularity,
            timestamp: data.timestamp,
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
            volume: data.volume,
          },
          update: {
            rawDataId: data.rawDataId,
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
            volume: data.volume,
          },
        }),
      );

      return await prisma.$transaction(operations);
    } catch (error) {
      console.error(
        "[ProcessedDataRepository] Error upserting candles:",
        error,
      );
      throw error;
    }
  }

  async findCandles(query: FindCandlesQuery): Promise<ProcessedData[]> {
    try {
      const { symbol, granularity, from, to, limit = 500 } = query;

      return await prisma.processedData.findMany({
        where: {
          symbol: symbol.toUpperCase(),
          granularity,
          timestamp: {
            ...(from && { gte: from }),
            ...(to && { lte: to }),
          },
        },
        orderBy: {
          timestamp: "asc",
        },
        take: limit,
      });
    } catch (error) {
      console.error("[ProcessedDataRepository] Error fetching candles:", error);
      throw error;
    }
  }

  async findLatestCandle(
    symbol: string,
    granularity: string,
  ): Promise<ProcessedData | null> {
    try {
      return await prisma.processedData.findFirst({
        where: {
          symbol: symbol.toUpperCase(),
          granularity,
        },
        orderBy: {
          timestamp: "desc",
        },
      });
    } catch (error) {
      console.error(
        "[ProcessedDataRepository] Error fetching latest candle:",
        error,
      );
      throw error;
    }
  }
}
