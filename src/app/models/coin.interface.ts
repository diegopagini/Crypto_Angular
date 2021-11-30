export interface Coin {
  exchange_id: string;
  website: string;
  name: string;
  data_start?: Date;
  data_end?: Date;
  data_quote_start?: Date;
  data_quote_end?: Date;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  data_orderbook_start?: Date;
  data_orderbook_end?: Date;
  data_trade_start?: Date;
  data_trade_end?: Date;
}
