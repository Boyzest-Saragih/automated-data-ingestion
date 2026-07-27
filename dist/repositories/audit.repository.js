import { prisma } from "../config/prisma.js";
import { AuditStatus, Prisma, } from "../generated/prisma/index.js";
export class AuditLogRepository {
    async create(data) {
        try {
            return await prisma.auditLog.create({
                data: {
                    action: data.action,
                    entity: data.entity,
                    entityId: data.entityId ?? null,
                    status: data.status || AuditStatus.INFO,
                    message: data.message ?? null,
                    details: data.details ?? Prisma.DbNull,
                },
            });
        }
        catch (error) {
            console.error("[AuditLogRepository] Failed to write audit log:", error);
            throw error;
        }
    }
    async findRecent(limit = 100) {
        return await prisma.auditLog.findMany({
            take: limit,
            orderBy: { createdAt: "desc" },
        });
    }
}
//# sourceMappingURL=audit.repository.js.map