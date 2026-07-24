import type { Request, Response } from "express";
import { RawDataIngestionService } from "../services/raw-data-ingestion.service.js";
import { RawDataStatus } from "../generated/prisma/index.js";
import type { ProviderType } from "../types/types.js";
import { SymbolRepository } from "../repositories/symbol.repository.js";

export class RawIngestionCtr {
  private ingestionService: RawDataIngestionService;
  private symbolRepository: SymbolRepository;

  constructor(
    ingestionService = new RawDataIngestionService(),
    symbolRepository = new SymbolRepository(),
  ) {
    this.ingestionService = ingestionService;
    this.symbolRepository = symbolRepository;
  }

  // POST /api/ingest/yahoo
  ingestData = async (req: Request, res: Response): Promise<void> => {
    try {
      const { provider, dataSourceId, symbol, interval, range } = req.body;

      const symbolRecord =
        await this.symbolRepository.findByDataSourceAndTicker(
          dataSourceId,
          symbol,
        );

      if (!provider || !dataSourceId || !symbol) {
        res.status(400).json({
          success: false,
          message: "provider, datasourceid dan symbol wajib diisi.",
        });
        return;
      }

      if (!symbolRecord || !symbolRecord.isActive) {
        throw new Error(
          `Symbol '${symbol}' tidak ditemukan atau sedang non-aktif pada DataSource ini.`,
        );
      }

      const result = await this.ingestionService.ingestData(
        provider as ProviderType,
        dataSourceId,
        symbol,
        { interval, range },
      );

      res.status(201).json({
        success: true,
        message: `Data berhasil di-ingest dari ${provider} Finance`,
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Terjadi kesalahan saat ingest data",
      });
    }
  };

  // GET /api/raw
  getAllRawData = async (req: Request, res: Response): Promise<void> => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      const result = await this.ingestionService.getPaginatedRawData({
        page,
        limit,
      });

      res.status(200).json({
        success: true,
        data: result.data,
        meta: result.meta,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil data raw",
      });
    }
  };

  // GET /api/raw/:id
  getRawDataById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "ID tidak valid atau tidak ditemukan",
        });
        return;
      }

      const data = await this.ingestionService.getRawDataById(id);

      if (!data) {
        res.status(404).json({
          success: false,
          message: `RawData dengan ID ${id} tidak ditemukan`,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil data raw",
      });
    }
  };

  // PATCH /api/raw/:id/status
  updateStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "ID tidak valid atau tidak ditemukan",
        });
        return;
      }

      if (!status || !Object.values(RawDataStatus).includes(status)) {
        res.status(400).json({
          success: false,
          message: "Status tidak valid",
        });
        return;
      }

      const updated = await this.ingestionService.updateRawStatus(id, status);

      res.status(200).json({
        success: true,
        message: "Status RawData berhasil diperbarui",
        data: updated,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal memperbarui status",
      });
    }
  };

  // DELETE /api/raw/:id
  deleteRawData = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "ID tidak valid atau tidak ditemukan",
        });
        return;
      }

      await this.ingestionService.deleteRawData(id);

      res.status(200).json({
        success: true,
        message: `RawData ${id} berhasil dihapus`,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal menghapus raw data",
      });
    }
  };
}
