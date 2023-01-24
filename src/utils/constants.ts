export const URL = "https://api.coingecko.com/api/v3";
export const ITEMS_PER_PAGE = 25;
export const REFRESH_INTERVAL_SECONDS = 60;

export const GROUPS = {
  ALL: "ALL",
  FAVORITES: "FAVORITES",
};

export const GROUPS_LIST = [
  {
    id: GROUPS.ALL,
    name: "All",
  },
  {
    id: GROUPS.FAVORITES,
    name: "Favorites",
  },
];

export const CURRENCIES = [
  { id: "usd", name: "US Dollar" },
  { id: "eur", name: "Euro" },
  { id: "jpy", name: "Japanese Yen" },
  { id: "brl", name: "Brazil Real" },
];

export const ORDER = [
  {
    // gecko_asc, gecko_desc
    id: "gecko_asc",
    name: "Default",
  },
  {
    // market_cap_asc, market_cap_desc
    id: "market_cap_asc",
    name: "Market Cap",
  },
  {
    // volume_asc, volume_desc
    id: "volume_asc",
    name: "Volume",
  },
  {
    // id_asc, id_desc
    id: "id_asc",
    name: "Id",
  },
];

export const PRICE_CHANGE = [
  {
    id: "1h",
    name: "1 hour",
  },
  {
    id: "24h",
    name: "24 hours",
  },
  {
    id: "7d",
    name: "One Week",
  },
  {
    id: "14d",
    name: "Two Weeks",
  },
  {
    id: "30d",
    name: "One Month",
  },
  {
    id: "200d",
    name: "200 days",
  },
  {
    id: "1y",
    name: "One year",
  },
];
