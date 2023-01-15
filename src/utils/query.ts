import axios from "axios";
import { URL, ITEMS_PER_PAGE } from "@/utils/constants";

export const getMarketCap = async (page = 1, itensPerPage = ITEMS_PER_PAGE) => {
  const [response, error] = await axios
    .get(
      `${URL}/coins/markets?vs_currency=usd&order=gecko_desc&per_page=${itensPerPage}&page=${page}&sparkline=true`,
      {
        "Access-Control-Allow-Origin": "*",
      }
    )
    .then((res) => [res.data, null])
    .catch((err) => [null, err]);

  return [response, error];
};
