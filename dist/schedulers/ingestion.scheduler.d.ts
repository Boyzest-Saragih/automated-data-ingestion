import { RawDataIngestionService } from "../services/raw-data-ingestion.service.js";
import { SymbolService } from "../services/symbol.service.js";
import { AuditLogService } from "../services/audit-log.service.js";
export declare class IngestionScheduler {
    private dataIngestionService;
    private symbolService;
    private auditLogService;
    constructor(dataIngestionService?: RawDataIngestionService, symbolService?: SymbolService, auditLogService?: AuditLogService);
    init(): void;
    private runIngestionJob;
}
//# sourceMappingURL=ingestion.scheduler.d.ts.map