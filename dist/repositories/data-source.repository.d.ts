import { type DataSource } from "../generated/prisma/index.js";
import { DataSourceType } from "../generated/prisma/index.js";
import type { ProviderType } from "../types/types.js";
type createDataSourceDto = {
    name: string;
    type: DataSourceType;
    provider: ProviderType;
    connection?: string | null;
    baseURL: string;
};
export declare class DataSourceRepository {
    create(data: createDataSourceDto): Promise<DataSource>;
    findAll(): Promise<DataSource[]>;
    findById(id: string): Promise<DataSource | null>;
    findByName(name: string): Promise<DataSource | null>;
    update(id: string, isActive: boolean): Promise<DataSource>;
}
export {};
//# sourceMappingURL=data-source.repository.d.ts.map