import type { FetchOHLCVOptions, OHLCVRes } from "../types/types.js";

export type ProviderConfig = {
  baseURL?: string | null;
  connection?: string | null;
};

export interface OHLCVProvider {
  getOHLCV(
    symbol: string,
    options?: FetchOHLCVOptions,
    config?: ProviderConfig,
  ): Promise<OHLCVRes>;
}
