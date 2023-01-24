import axios, { AxiosRequestConfig } from "axios";
import { URL, ITEMS_PER_PAGE } from "@/utils/constants";

axios.defaults.baseURL = URL;

const config: AxiosRequestConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
};

interface GetMarketCapProps {
  page: number;
  itensPerPage?: number;
  ids?: string[];
  vs_currency?: string;
  order?: string;
}

export const getMarketCap = async ({
  page = 1,
  itensPerPage = ITEMS_PER_PAGE,
  vs_currency = "usd",
  order = "gecko_desc",
}: GetMarketCapProps) => {
  const params = new URLSearchParams({
    page: page.toString(),
    itensPerPage: itensPerPage.toString(),
    vs_currency,
    order,
    sparkline: "true",
  });

  const [response, error] = await axios
    .get("/coins/markets", { ...config, params })
    .then((res) => [res.data, null])
    .catch((err) => [null, err]);

  return [response, error];
};

export const getCategoriesList = async () => {
  const [response, error] = await axios
    .get("/coins/categories/list", config)
    .then((res) => [res.data, null])
    .catch((err) => [null, err]);

  return [response, error];
};
