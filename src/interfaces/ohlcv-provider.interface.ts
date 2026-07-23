import type {
  FetchOHLCVOptions,
  YahooOHLCVRes,
} from "../services/yahoo-client.service.js";

export interface OHLCVProvider {
  getOHLCV(symbol: string, options?: FetchOHLCVOptions): Promise<YahooOHLCVRes>;
}
