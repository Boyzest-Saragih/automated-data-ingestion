import type { OHLCVProvider } from "../interfaces/ohlcv-provider.interface.js";
import type {
  FetchOHLCVOptions,
  YahooOHLCVRes,
} from "./yahoo-client.service.js";

export class BinanceClientService implements OHLCVProvider {
  async getOHLCV(
    symbol: string,
    options?: FetchOHLCVOptions,
  ): Promise<YahooOHLCVRes> {
    // Logika fetch API Binance di sini...
    // Menerjemahkan data klines Binance ke format standar YahooOHLCVRes kamu
    return {
      symbol,
      currency: "USDT",
      granularity: options?.interval || "1d",
      candles: [], // Data candle Binance
    };
  }
}
