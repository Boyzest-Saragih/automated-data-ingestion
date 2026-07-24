// controllers/symbol.controller.ts
import type { Request, Response } from "express";
import { SymbolService } from "../services/symbol.service.js";

export class SymbolCtr {
  private symbolService: SymbolService;

  constructor(symbolService = new SymbolService()) {
    this.symbolService = symbolService;
  }

  createSymbol = async (req: Request, res: Response): Promise<void> => {
    try {
      const { dataSourceId, ticker, name, defaultInterval } = req.body;

      if (!dataSourceId || !ticker) {
        res.status(400).json({
          success: false,
          message: "dataSourceId dan ticker wajib diisi.",
        });
        return;
      }

      const newSymbol = await this.symbolService.createSymbol({
        dataSourceId,
        ticker,
        name,
        defaultInterval,
      });

      res.status(201).json({
        success: true,
        message: `Symbol ${newSymbol.ticker} berhasil didaftarkan.`,
        data: newSymbol,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error?.message || "Gagal mendaftarkan symbol",
      });
    }
  };

  getAllSymbols = async (req: Request, res: Response): Promise<void> => {
    try {
      const symbols = await this.symbolService.getAllSymbol();

      res.status(200).json({
        success: true,
        count: symbols.length,
        data: symbols,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil daftar symbol",
      });
    }
  };

  getSymbolsByDataSource = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const { dataSourceId } = req.params;

      if (!dataSourceId || typeof dataSourceId !== "string") {
        res.status(400).json({
          success: false,
          message: "ID tidak valid atau tidak ditemukan",
        });
        return;
      }

      const symbols =
        await this.symbolService.getSymbolsByDataSource(dataSourceId);

      res.status(200).json({
        success: true,
        count: symbols.length,
        data: symbols,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil daftar symbol",
      });
    }
  };

  toggleStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { isActive } = req.body;

      if (typeof isActive !== "boolean") {
        res.status(400).json({
          success: false,
          message: "Field 'isActive' harus bertipe boolean.",
        });
        return;
      }

      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "ID tidak valid atau tidak ditemukan",
        });
        return;
      }

      const updated = await this.symbolService.toggleSymbolStatus(id, isActive);

      res.status(200).json({
        success: true,
        message: `Status symbol ${updated.ticker} berhasil diubah.`,
        data: updated,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengubah status symbol",
      });
    }
  };
}
