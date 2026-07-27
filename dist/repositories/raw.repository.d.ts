import { Prisma, type RawData } from "../../src/generated/prisma/index.js";
import { RawDataStatus } from "../generated/prisma/index.js";
type CreateRawDto = {
    datasourceId: string;
    payload: Prisma.InputJsonValue;
    status: RawDataStatus;
};
export type PaginationOptions = {
    page: number;
    limit: number;
};
export type PaginatedResult<T> = {
    data: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};
export declare class RawRepository {
    create(data: CreateRawDto): Promise<RawData>;
    createMany(datas: CreateRawDto[]): Promise<Prisma.BatchPayload>;
    findById(id: string): Promise<RawData | null>;
    findAll(limit: number): Promise<RawData[]>;
    findBystatus(status: RawDataStatus, limit?: number): Promise<RawData[]>;
    findByDatasource(dataSourceId: string, limit?: number): Promise<RawData[]>;
    findLatest(dataSourceId?: string): Promise<RawData | null>;
    findWithPagination(options: PaginationOptions): Promise<PaginatedResult<RawData>>;
    count(): Promise<number>;
    countByStatus(status: RawDataStatus): Promise<number>;
    updateStatus(id: string, status: RawDataStatus): Promise<RawData>;
    exists(id: string): Promise<boolean>;
}
export {};
//# sourceMappingURL=raw.repository.d.ts.map