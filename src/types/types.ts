export type ProviderType = "yahoo" | "binance";

export type OHLCV = {
  timestamp: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
};

export type FetchOHLCVOptions = {
  interval?: "1m" | "5m" | "15m" | "1h" | "1d" | "1wk" | "1mo";
  range?: "1d" | "5d" | "1mo" | "3mo" | "6mo" | "1y" | "5y" | "max";
};

export type OHLCVRes = {
  symbol: string;
  currency: string;
  granularity: string;
  candles: OHLCV[];
};
