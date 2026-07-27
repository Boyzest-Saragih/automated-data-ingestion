import { prisma } from "../config/prisma.js";
import {} from "../generated/prisma/index.js";
export class ProcessedDataRepository {
    async upsertMany(datas) {
        try {
            const operations = datas.map((data) => prisma.processedData.upsert({
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
            }));
            return await prisma.$transaction(operations);
        }
        catch (error) {
            console.error("[ProcessedDataRepository] Error upserting candles:", error);
            throw error;
        }
    }
    async findCandles(query) {
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
        }
        catch (error) {
            console.error("[ProcessedDataRepository] Error fetching candles:", error);
            throw error;
        }
    }
    async findLatestCandle(symbol, granularity) {
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
        }
        catch (error) {
            console.error("[ProcessedDataRepository] Error fetching latest candle:", error);
            throw error;
        }
    }
}
//# sourceMappingURL=processed-data.repository.js.map