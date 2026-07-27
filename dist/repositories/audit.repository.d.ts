import { AuditStatus, Prisma, type AuditLog } from "../generated/prisma/index.js";
export type CreateAuditLogDto = {
    action: string;
    entity: string;
    entityId?: string | undefined;
    status?: AuditStatus | undefined;
    message?: string | undefined;
    details?: Prisma.InputJsonValue | undefined;
};
export declare class AuditLogRepository {
    create(data: CreateAuditLogDto): Promise<AuditLog>;
    findRecent(limit?: number): Promise<AuditLog[]>;
}
//# sourceMappingURL=audit.repository.d.ts.map