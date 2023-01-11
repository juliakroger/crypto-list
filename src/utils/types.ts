export interface CoinData {
  id: string;
  image: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export type ListOfCoins = CoinData[] | undefined;
