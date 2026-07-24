import type { Request, Response } from "express";
import { ProcessedDataRepository } from "../repositories/processed-data.repository.js";

export class ProcessedDataCtr {
  private processedDataRepo = new ProcessedDataRepository();

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

      const candles = await this.processedDataRepo.findCandles({
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
}
