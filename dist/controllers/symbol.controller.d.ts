import type { Request, Response } from "express";
import { SymbolService } from "../services/symbol.service.js";
export declare class SymbolCtr {
    private symbolService;
    constructor(symbolService?: SymbolService);
    createSymbol: (req: Request, res: Response) => Promise<void>;
    getAllSymbols: (req: Request, res: Response) => Promise<void>;
    getSymbolsByDataSource: (req: Request, res: Response) => Promise<void>;
    toggleStatus: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=symbol.controller.d.ts.map