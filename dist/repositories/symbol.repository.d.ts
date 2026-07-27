import { type Symbol } from "../generated/prisma/index.js";
export type CreateSymbolDto = {
    dataSourceId: string;
    ticker: string;
    name?: string;
    defaultInterval?: string;
    isActive?: boolean;
};
export declare class SymbolRepository {
    create(data: CreateSymbolDto): Promise<Symbol>;
    getAllSymbol(): Promise<Symbol[]>;
    findByDataSource(dataSourceId: string): Promise<Symbol[]>;
    findByDataSourceAndTicker(dataSourceId: string, ticker: string): Promise<Symbol | null>;
    /**
     * ⚡ QUERY UTAMA UNTUK SCHEDULER:
     * Mengambil semua Symbol yang AKTIF berserta DataSource-nya yang juga AKTIF.
     */
    findActiveSymbolsForIngestion(): Promise<({
        dataSource: {
            id: string;
            name: string;
            type: import("../generated/prisma/index.js").$Enums.DataSourceType;
            provider: string;
            connection: string | null;
            baseURL: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        dataSourceId: string;
        ticker: string;
        name: string | null;
        defaultInterval: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    updateStatus(id: string, isActive: boolean): Promise<Symbol>;
}
//# sourceMappingURL=symbol.repository.d.ts.map