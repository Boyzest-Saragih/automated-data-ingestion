import axios, {} from "axios";
export class BinanceClientService {
    DEFAULT_BASE_URL = "https://api.binance.com/api/v3";
    createClient(baseURL) {
        return axios.create({
            baseURL: baseURL || this.DEFAULT_BASE_URL,
            timeout: 10000,
            headers: {
                Accept: "application/json",
            },
        });
    }
    async getOHLCV(symbol, options, config) {
        const { interval = "1d" } = options;
        const client = this.createClient(config?.baseURL);
        try {
            const response = await client.get("/klines", {
                params: {
                    symbol: symbol.toUpperCase(),
                    interval: interval,
                    limit: 100,
                },
            });
            return this.mapToOHLCV(response.data, symbol.toUpperCase(), interval);
        }
        catch (error) {
            console.error(`[BinanceService] Error fetching OHLCV for ${symbol}:`, error?.message || error);
            throw error;
        }
    }
    mapToOHLCV(klines, symbol, interval) {
        const candles = klines.map((item) => {
            const openTime = item[0];
            const open = parseFloat(item[1]);
            const high = parseFloat(item[2]);
            const low = parseFloat(item[3]);
            const close = parseFloat(item[4]);
            const volume = parseFloat(item[5]);
            return {
                timestamp: new Date(openTime).toISOString(),
                open: Number(open.toFixed(4)),
                high: Number(high.toFixed(4)),
                low: Number(low.toFixed(4)),
                close: Number(close.toFixed(4)),
                volume,
            };
        });
        return {
            symbol,
            currency: "USDT",
            granularity: interval,
            candles,
        };
    }
}
//# sourceMappingURL=binance-client.service.js.map