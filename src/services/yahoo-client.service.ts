import axios, { type AxiosInstance } from "axios";
import type {
  OHLCVProvider,
  ProviderConfig,
} from "../interfaces/ohlcv-provider.interface.js";
import type {
  OHLCV,
  FetchOHLCVOptions,
  OHLCVRes,
} from "../types/types.js";

export class YahooClientService implements OHLCVProvider {
  private DEFAULT_BASE_URL =
    "https://query1.finance.yahoo.com/v8/finance/chart";

  private createClient(baseURL?: string | null): AxiosInstance {
    return axios.create({
      baseURL: baseURL || this.DEFAULT_BASE_URL,
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
    config: ProviderConfig,
  ): Promise<OHLCVRes> {
    const { interval = "1d", range = "1mo" } = options;
    const client = this.createClient(config?.baseURL);

    try {
      const response = await client.get(`/${symbol.toUpperCase()}`, {
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

  private mapToOHLCV(result: any, interval: string): OHLCVRes {
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
