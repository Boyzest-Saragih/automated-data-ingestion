import { prisma } from "../config/prisma.js";
import {} from "../generated/prisma/index.js";
export class SymbolRepository {
    async create(data) {
        try {
            return await prisma.symbol.create({
                data: {
                    dataSourceId: data.dataSourceId,
                    ticker: data.ticker.toUpperCase(),
                    name: data.name ?? null,
                    defaultInterval: data.defaultInterval || "15m",
                    isActive: data.isActive ?? true,
                },
            });
        }
        catch (error) {
            console.error("[SymbolRepository] Error creating symbol:", error);
            throw error;
        }
    }
    async getAllSymbol() {
        return await prisma.symbol.findMany({
            orderBy: { ticker: "asc" },
        });
    }
    async findByDataSource(dataSourceId) {
        return await prisma.symbol.findMany({
            where: { dataSourceId },
            orderBy: { ticker: "asc" },
        });
    }
    async findByDataSourceAndTicker(dataSourceId, ticker) {
        return await prisma.symbol.findFirst({
            where: { dataSourceId, ticker },
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
        }
        catch (error) {
            console.error("[SymbolRepository] Error fetching active symbols:", error);
            throw error;
        }
    }
    async updateStatus(id, isActive) {
        return await prisma.symbol.update({
            where: { id },
            data: { isActive },
        });
    }
}
//# sourceMappingURL=symbol.repository.js.map