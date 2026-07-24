import { DataSourceService } from "../services/data-source.service.js";
import type { Request, Response } from "express";

export class DataSourceCtr {
  private dataSourceService: DataSourceService;

  constructor(dataSourceService = new DataSourceService()) {
    this.dataSourceService = dataSourceService;
  }

  createDataSource = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, type, connection, baseURL } = req.body;

      if (!name || !type || !baseURL) {
        res.status(400).json({
          success: false,
          message: "semua field wajib diisi.",
        });
        return;
      }

      const result = await this.dataSourceService.create(
        name,
        type,
        connection,
        baseURL,
      );

      res.status(201).json({
        success: true,
        message: "DataSource berhasil dibuat",
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Terjadi kesalahan saat membuat data source",
      });
    }
  };
}
