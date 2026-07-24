import type { Request, Response } from "express";
import { ProcessedDataService } from "../services/processed-data.service.js";

export class ProcessedDataCtr {
  private processedDataService = new ProcessedDataService();

  // GET /api/market-data?symbol=AAPL&granularity=1d&limit=100
  getCandles = async (req: Request, res: Response) => {
    try {
      const { symbol, granularity, from, to, limit } = req.query;

      if (!symbol || !granularity) {
        res.status(400).json({
          success: false,
          message: "Query param 'symbol' dan 'granularity' wajib diisi.",
        });
        return;
      }

      const candles = await this.processedDataService.getCandles({
        symbol: String(symbol),
        granularity: String(granularity),
        from: from ? new Date(String(from)) : undefined,
        to: to ? new Date(String(to)) : undefined,
        limit: limit ? Number(limit) : 500,
      });

      res.status(200).json({
        success: true,
        count: candles.length,
        data: candles,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil market data",
      });
    }
  };

  // GET /api/processed-data/latest?symbol=AAPL&granularity=1d
  getLatestCandle = async (req: Request, res: Response) => {
    try {
      const { symbol, granularity } = req.query;

      if (!symbol || !granularity) {
        res.status(400).json({
          success: false,
          message: "Query param 'symbol' dan 'granularity' wajib diisi.",
        });
        return;
      }

      const candle = await this.processedDataService.getLatestCandle(
        String(symbol),
        String(granularity),
      );

      if (!candle) {
        res.status(404).json({
          success: false,
          message: `Candle terbaru untuk ${String(symbol).toUpperCase()} (${granularity}) tidak ditemukan.`,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: candle,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Gagal mengambil candle terbaru",
      });
    }
  };
}
