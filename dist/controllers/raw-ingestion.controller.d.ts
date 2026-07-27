import type { Request, Response } from "express";
import { RawDataIngestionService } from "../services/raw-data-ingestion.service.js";
import { SymbolRepository } from "../repositories/symbol.repository.js";
export declare class RawIngestionCtr {
    private ingestionService;
    private symbolRepository;
    constructor(ingestionService?: RawDataIngestionService, symbolRepository?: SymbolRepository);
    ingestData: (req: Request, res: Response) => Promise<void>;
    getAllRawData: (req: Request, res: Response) => Promise<void>;
    getRawDataById: (req: Request, res: Response) => Promise<void>;
    updateStatus: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=raw-ingestion.controller.d.ts.map