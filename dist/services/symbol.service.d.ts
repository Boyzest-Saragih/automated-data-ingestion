import { SymbolRepository, type CreateSymbolDto } from "../repositories/symbol.repository.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
import { AuditLogService } from "./audit-log.service.js";
export declare class SymbolService {
    private symbolRepo;
    private dataSourceRepo;
    private auditLogService;
    constructor(symbolRepo?: SymbolRepository, dataSourceRepo?: DataSourceRepository, auditLogService?: AuditLogService);
    createSymbol(data: CreateSymbolDto): Promise<{
        id: string;
        dataSourceId: string;
        ticker: string;
        name: string | null;
        defaultInterval: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllSymbol(): Promise<{
        id: string;
        dataSourceId: string;
        ticker: string;
        name: string | null;
        defaultInterval: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getSymbolsByDataSource(dataSourceId: string): Promise<{
        id: string;
        dataSourceId: string;
        ticker: string;
        name: string | null;
        defaultInterval: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    toggleSymbolStatus(id: string, isActive: boolean): Promise<{
        id: string;
        dataSourceId: string;
        ticker: string;
        name: string | null;
        defaultInterval: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * Helper Service khusus untuk dipanggil oleh Scheduler / Cron Job
     */
    getActiveSymbolsForScheduler(): Promise<({
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
}
//# sourceMappingURL=symbol.service.d.ts.map