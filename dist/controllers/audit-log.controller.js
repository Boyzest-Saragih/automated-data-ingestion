import { AuditLogRepository } from "../repositories/audit.repository.js";
export class AuditLogCtr {
    auditRepo = new AuditLogRepository();
    // GET /api/audit-logs?limit=50
    getRecentLogs = async (req, res) => {
        try {
            const limit = Number(req.query.limit) || 50;
            const logs = await this.auditRepo.findRecent(limit);
            res.status(200).json({
                success: true,
                count: logs.length,
                data: logs,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error?.message || "Gagal mengambil audit log",
            });
        }
    };
}
//# sourceMappingURL=audit-log.controller.js.map