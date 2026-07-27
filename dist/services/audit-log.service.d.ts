import { AuditLogRepository } from "../repositories/audit.repository.js";
export declare class AuditLogService {
    private auditRepo;
    constructor(auditRepo?: AuditLogRepository);
    logSuccess(action: string, entity: string, message: string, details?: any, entityId?: string): Promise<{
        id: string;
        action: string;
        entity: string;
        entityId: string | null;
        status: import("../generated/prisma/index.js").$Enums.AuditStatus;
        message: string | null;
        details: import("../generated/prisma/runtime/library.js").JsonValue | null;
        createdAt: Date;
    }>;
    logError(action: string, entity: string, message: string, error?: any, entityId?: string): Promise<{
        id: string;
        action: string;
        entity: string;
        entityId: string | null;
        status: import("../generated/prisma/index.js").$Enums.AuditStatus;
        message: string | null;
        details: import("../generated/prisma/runtime/library.js").JsonValue | null;
        createdAt: Date;
    }>;
    logInfo(action: string, entity: string, message: string, details?: any, entityId?: string): Promise<{
        id: string;
        action: string;
        entity: string;
        entityId: string | null;
        status: import("../generated/prisma/index.js").$Enums.AuditStatus;
        message: string | null;
        details: import("../generated/prisma/runtime/library.js").JsonValue | null;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=audit-log.service.d.ts.map