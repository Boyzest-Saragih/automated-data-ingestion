import { DataSourceType } from "../generated/prisma/index.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
import type { ProviderType } from "../types/types.js";
export declare class DataSourceService {
    private dataSourceRepository;
    constructor(dataSourceRepository?: DataSourceRepository);
    create(name: string, type: DataSourceType, provider: ProviderType, connection: string, baseURL: string): Promise<{
        id: string;
        name: string;
        type: import("../generated/prisma/index.js").$Enums.DataSourceType;
        provider: string;
        connection: string | null;
        baseURL: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllDataSources(): Promise<{
        id: string;
        name: string;
        type: import("../generated/prisma/index.js").$Enums.DataSourceType;
        provider: string;
        connection: string | null;
        baseURL: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDataSourcesById(id: string): Promise<{
        id: string;
        name: string;
        type: import("../generated/prisma/index.js").$Enums.DataSourceType;
        provider: string;
        connection: string | null;
        baseURL: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getDataSourcesByName(name: string): Promise<{
        id: string;
        name: string;
        type: import("../generated/prisma/index.js").$Enums.DataSourceType;
        provider: string;
        connection: string | null;
        baseURL: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateDataSources(id: string, isActive: boolean): Promise<{
        id: string;
        name: string;
        type: import("../generated/prisma/index.js").$Enums.DataSourceType;
        provider: string;
        connection: string | null;
        baseURL: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=data-source.service.d.ts.map