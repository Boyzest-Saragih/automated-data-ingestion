import { prisma } from "../config/prisma.js";
import {
  AuditStatus,
  Prisma,
  type AuditLog,
} from "../generated/prisma/index.js";

export type CreateAuditLogDto = {
  action: string;
  entity: string;
  entityId?: string | undefined;
  status?: AuditStatus | undefined;
  message?: string | undefined;
  details?: Prisma.InputJsonValue | undefined;
};

export class AuditLogRepository {
  async create(data: CreateAuditLogDto): Promise<AuditLog> {
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
    } catch (error) {
      console.error("[AuditLogRepository] Failed to write audit log:", error);
      throw error;
    }
  }

  async findRecent(limit = 100): Promise<AuditLog[]> {
    return await prisma.auditLog.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
    });
  }
}
