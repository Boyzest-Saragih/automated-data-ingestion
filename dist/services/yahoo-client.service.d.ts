import type { OHLCVProvider, ProviderConfig } from "../interfaces/ohlcv-provider.interface.js";
import type { FetchOHLCVOptions, OHLCVRes } from "../types/types.js";
export declare class YahooClientService implements OHLCVProvider {
    private DEFAULT_BASE_URL;
    private createClient;
    getOHLCV(symbol: string, options: FetchOHLCVOptions | undefined, config: ProviderConfig): Promise<OHLCVRes>;
    /**
     * Private Helper: Menggabungkan timestamp terpisah dan array indikator OHLCV dari Yahoo Finance
     * menjadi array object candle yang rapi.
     */
    private mapToOHLCV;
}
//# sourceMappingURL=yahoo-client.service.d.ts.map