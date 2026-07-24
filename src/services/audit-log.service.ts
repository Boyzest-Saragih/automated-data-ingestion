// services/audit-log.service.ts
import { AuditStatus } from "../generated/prisma/index.js";
import {
  AuditLogRepository,
  type CreateAuditLogDto,
} from "../repositories/audit.repository.js";

export class AuditLogService {
  private auditRepo: AuditLogRepository;

  constructor(auditRepo = new AuditLogRepository()) {
    this.auditRepo = auditRepo;
  }

  async logSuccess(
    action: string,
    entity: string,
    message: string,
    details?: any,
    entityId?: string,
  ) {
    return await this.auditRepo.create({
      action,
      entity,
      entityId,
      status: AuditStatus.SUCCESS,
      message,
      details,
    });
  }

  async logError(
    action: string,
    entity: string,
    message: string,
    error?: any,
    entityId?: string,
  ) {
    return await this.auditRepo.create({
      action,
      entity,
      entityId,
      status: AuditStatus.FAILED,
      message,
      details:
        error instanceof Error
          ? { error: error.message, stack: error.stack }
          : error,
    });
  }

  async logInfo(
    action: string,
    entity: string,
    message: string,
    details?: any,
    entityId?: string,
  ) {
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
