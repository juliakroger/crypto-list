import axios from "axios";
import { URL, ITEMS_PER_PAGE } from "./constants";

export const getMarketCap = async (page = 1, itensPerPage = ITEMS_PER_PAGE) => {
  const [response, error] = await axios
    .get(
      `${URL}?vs_currency=usd&order=market_cap_desc&per_page=${itensPerPage}&page=${page}&sparkline=true`
    )
    .then((res) => [res.data, null])
    .catch((err) => [null, err]);

  return [response, error];
};
