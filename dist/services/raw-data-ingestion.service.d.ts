import { RawDataStatus } from "../generated/prisma/index.js";
import { RawRepository, type PaginationOptions } from "../repositories/raw.repository.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
import type { FetchOHLCVOptions, ProviderType } from "../types/types.js";
import { ProcessedDataService } from "./processed-data.service.js";
export declare class RawDataIngestionService {
    private providers;
    private rawRepository;
    private dataSourceRepository;
    private processedDataService;
    constructor(rawRepository?: RawRepository, dataSourceRepository?: DataSourceRepository, processedDataService?: ProcessedDataService);
    ingestData(providerName: ProviderType, dataSourceId: string, symbol: string, options?: FetchOHLCVOptions): Promise<{
        id: string;
        dataSourceId: string;
        payload: import("../generated/prisma/runtime/library.js").JsonValue;
        status: import("../generated/prisma/index.js").$Enums.RawDataStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getRawDataById(id: string): Promise<{
        id: string;
        dataSourceId: string;
        payload: import("../generated/prisma/runtime/library.js").JsonValue;
        status: import("../generated/prisma/index.js").$Enums.RawDataStatus;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getPaginatedRawData(options: PaginationOptions): Promise<import("../repositories/raw.repository.js").PaginatedResult<{
        id: string;
        dataSourceId: string;
        payload: import("../generated/prisma/runtime/library.js").JsonValue;
        status: import("../generated/prisma/index.js").$Enums.RawDataStatus;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    getRawDataByDatasource(dataSourceId: string, limit?: number): Promise<{
        id: string;
        dataSourceId: string;
        payload: import("../generated/prisma/runtime/library.js").JsonValue;
        status: import("../generated/prisma/index.js").$Enums.RawDataStatus;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateRawStatus(id: string, status: RawDataStatus): Promise<{
        id: string;
        dataSourceId: string;
        payload: import("../generated/prisma/runtime/library.js").JsonValue;
        status: import("../generated/prisma/index.js").$Enums.RawDataStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=raw-data-ingestion.service.d.ts.map