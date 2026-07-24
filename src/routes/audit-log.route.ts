import { Router } from "express";
import { AuditLogCtr } from "../controllers/audit-log.controller.js";

const router = Router();
const controller = new AuditLogCtr();


// Read Raw Data
router.get("/auditLog", controller.getRecentLogs);

export default router;