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
    from?: Date | undefined;
    to?: Date | undefined;
    limit?: number | undefined;
};
export declare class ProcessedDataRepository {
    upsertMany(datas: CreateProcessedDataDto[]): Promise<ProcessedData[]>;
    findCandles(query: FindCandlesQuery): Promise<ProcessedData[]>;
    findLatestCandle(symbol: string, granularity: string): Promise<ProcessedData | null>;
}
//# sourceMappingURL=processed-data.repository.d.ts.map