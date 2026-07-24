import type { Request, Response } from "express";
import { AuditLogRepository } from "../repositories/audit.repository.js";

export class AuditLogCtr {
  private auditRepo = new AuditLogRepository();

  // GET /api/audit-logs?limit=50
  getRecentLogs = async (req: Request, res: Response) => {
    try {
      const limit = Number(req.query.limit) || 50;
      const logs = await this.auditRepo.findRecent(limit);

      res.status(200).json({
        success: true,
        count: logs.length,
        data: logs,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil audit log",
      });
    }
  };
}
