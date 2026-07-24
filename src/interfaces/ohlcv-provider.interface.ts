import type {
  FetchOHLCVOptions,
  YahooOHLCVRes,
} from "../services/yahoo-client.service.js";

export type ProviderConfig = {
  baseURL?: string | null;
  connection?: string | null;
};

export interface OHLCVProvider {
  getOHLCV(
    symbol: string,
    options?: FetchOHLCVOptions,
    config?: ProviderConfig,
  ): Promise<YahooOHLCVRes>;
}
