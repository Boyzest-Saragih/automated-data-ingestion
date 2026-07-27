// services/audit-log.service.ts
import { AuditStatus } from "../generated/prisma/index.js";
import { AuditLogRepository, } from "../repositories/audit.repository.js";
export class AuditLogService {
    auditRepo;
    constructor(auditRepo = new AuditLogRepository()) {
        this.auditRepo = auditRepo;
    }
    async logSuccess(action, entity, message, details, entityId) {
        return await this.auditRepo.create({
            action,
            entity,
            entityId,
            status: AuditStatus.SUCCESS,
            message,
            details,
        });
    }
    async logError(action, entity, message, error, entityId) {
        return await this.auditRepo.create({
            action,
            entity,
            entityId,
            status: AuditStatus.FAILED,
            message,
            details: error instanceof Error
                ? { error: error.message, stack: error.stack }
                : error,
        });
    }
    async logInfo(action, entity, message, details, entityId) {
        return await this.auditRepo.create({
            action,
            entity,
            entityId,
            status: AuditStatus.INFO,
            message,
            details,
        });
    }
}
//# sourceMappingURL=audit-log.service.js.map