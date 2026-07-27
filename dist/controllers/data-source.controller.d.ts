import { DataSourceService } from "../services/data-source.service.js";
import type { Request, Response } from "express";
export declare class DataSourceCtr {
    private dataSourceService;
    constructor(dataSourceService?: DataSourceService);
    createDataSource: (req: Request, res: Response) => Promise<void>;
    getAllDataSources: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getDataSourcesById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getDataSourcesByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateDataSources: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=data-source.controller.d.ts.map