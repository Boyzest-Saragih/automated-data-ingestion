import axios, { type AxiosInstance } from "axios";

export type OHLCV = {
  timestamp: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
};

export type YahooOHLCVRes = {
  symbol: string;
  currency: string;
  granularity: string;
  candles: OHLCV[];
};

export type FetchOHLCVOptions = {
  interval?: "1m" | "5m" | "15m" | "1h" | "1d" | "1wk" | "1mo";
  range?: "1d" | "5d" | "1mo" | "3mo" | "6mo" | "1y" | "5y" | "max";
};

export class YahooService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://query1.finance.yahoo.com/v8/finance/chart",
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });
  }

  async getOHLCV(
    symbol: string,
    options: FetchOHLCVOptions = {},
  ): Promise<YahooOHLCVRes> {
    const { interval = "1d", range = "1mo" } = options;

    try {
      const response = await this.client.get(`/${symbol.toUpperCase()}`, {
        params: {
          interval,
          range,
        },
      });

      const result = response.data?.chart?.result?.[0];

      if (!result) {
        throw new Error(`Data OHLCV tidak ditemukan untuk symbol: ${symbol}`);
      }

      return this.mapToOHLCV(result, interval);
    } catch (error: any) {
      console.error(
        `[YahooService] Error fetching OHLCV for ${symbol}:`,
        error?.message || error,
      );
      throw error;
    }
  }

  /**
   * Private Helper: Menggabungkan timestamp terpisah dan array indikator OHLCV dari Yahoo Finance
   * menjadi array object candle yang rapi.
   */

  private mapToOHLCV(result: any, interval: string): YahooOHLCVRes {
    const meta = result.meta;
    const timestamps: number[] = result.timestamp || [];
    const quote = result.indicators?.quote?.[0] || {};

    const opens: (number | null)[] = quote.open || [];
    const highs: (number | null)[] = quote.high || [];
    const lows: (number | null)[] = quote.low || [];
    const closes: (number | null)[] = quote.close || [];
    const volumes: (number | null)[] = quote.volume || [];

    const candles: OHLCV[] = [];

    for (let i = 0; i < timestamps.length; i++) {
      const timestamp = timestamps[i];
      const open = opens[i];
      const high = highs[i];
      const low = lows[i];
      const close = closes[i];
      const volume = volumes[i];

      // Cek jika timestamp atau salah satu komponen harga bernilai null/undefined
      if (
        timestamp === undefined ||
        open == null ||
        high == null ||
        low == null ||
        close == null
      ) {
        continue;
      }

      candles.push({
        timestamp: new Date(timestamp * 1000).toISOString(),
        open: Number(open.toFixed(4)),
        high: Number(high.toFixed(4)),
        low: Number(low.toFixed(4)),
        close: Number(close.toFixed(4)),
        volume: volume ?? 0,
      });
    }

    return {
      symbol: meta.symbol,
      currency: meta.currency,
      granularity: interval,
      candles,
    };
  }
}
