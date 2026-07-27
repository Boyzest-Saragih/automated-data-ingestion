import type { OHLCVProvider, ProviderConfig } from "../interfaces/ohlcv-provider.interface.js";
import type { FetchOHLCVOptions, OHLCVRes } from "../types/types.js";
export declare class BinanceClientService implements OHLCVProvider {
    private DEFAULT_BASE_URL;
    private createClient;
    getOHLCV(symbol: string, options: FetchOHLCVOptions, config?: ProviderConfig): Promise<OHLCVRes>;
    private mapToOHLCV;
}
//# sourceMappingURL=binance-client.service.d.ts.map