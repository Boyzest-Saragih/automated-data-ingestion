import { RawRepository } from "../repositories/raw.repository.js";
import { ProcessedDataRepository, type FindCandlesQuery } from "../repositories/processed-data.repository.js";
import { AuditLogService } from "./audit-log.service.js";
export declare class ProcessedDataService {
    private rawRepository;
    private processedDataRepository;
    private auditLogService;
    constructor(rawRepository?: RawRepository, processedDataRepository?: ProcessedDataRepository, auditLogService?: AuditLogService);
    processRawData(rawDataId: string): Promise<{
        success: boolean;
        rawDataId: string;
        processedCount: number;
    }>;
    getCandles(query: FindCandlesQuery): Promise<{
        id: string;
        rawDataId: string;
        symbol: string;
        granularity: string;
        timestamp: Date;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getLatestCandle(symbol: string, granularity: string): Promise<{
        id: string;
        rawDataId: string;
        symbol: string;
        granularity: string;
        timestamp: Date;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
//# sourceMappingURL=processed-data.service.d.ts.map