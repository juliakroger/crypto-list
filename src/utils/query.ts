import axios, { AxiosRequestConfig } from "axios";
import { URL, ITEMS_PER_PAGE } from "@/utils/constants";

const config: AxiosRequestConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
};

export const getMarketCap = async (page = 1, itensPerPage = ITEMS_PER_PAGE) => {
  const [response, error] = await axios
    .get(
      `${URL}/coins/markets?vs_currency=usd&order=gecko_desc&per_page=${itensPerPage}&page=${page}&sparkline=true`,
      config
    )
    .then((res) => [res.data, null])
    .catch((err) => [null, err]);

  return [response, error];
};
