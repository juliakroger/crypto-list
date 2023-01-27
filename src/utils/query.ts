import axios, { AxiosRequestConfig } from "axios";
import {
  URL,
  ITEMS_PER_PAGE,
  REFRESH_INTERVAL_SECONDS,
} from "@/utils/constants";
import { filterEmptyParams } from "./filterEmptyParams";
import { useQuery, useInfiniteQuery } from "react-query";
import { GROUPS } from "@/utils/constants";

axios.defaults.baseURL = URL;

const config: AxiosRequestConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
};

interface GetMarketCapProps {
  groupBy?: string;
  ids?: string[];
  vs_currency?: string;
  order?: string;
  category?: string;
}

export const getMarketCap = ({
  groupBy,
  vs_currency = "usd",
  category,
  ids,
  order = "gecko_desc",
}: GetMarketCapProps): any => {
  if (groupBy === GROUPS.FAVORITES) {
    const params = filterEmptyParams({
      page: "1",
      itensPerPage: ids?.length,
      vs_currency,
      category,
      ids: ids?.join(","),
      order,
      sparkline: "true",
    });

    return useQuery(
      ["market-cap-favorites", vs_currency, category, ids, order],
      () =>
        axios
          .get("/coins/markets", {
            ...config,
            params: new URLSearchParams(params),
          })
          .then((res) => res.data),
      {
        refetchOnWindowFocus: true,
        refetchInterval: REFRESH_INTERVAL_SECONDS * 1000,
        retry: 1,
      }
    );
  }

  return useInfiniteQuery(
    ["market-cap", vs_currency, category, order],
    ({ pageParam = 1 }) => {
      const params = filterEmptyParams({
        page: pageParam.toString(),
        itensPerPage: ITEMS_PER_PAGE,
        vs_currency,
        category,
        order,
        sparkline: "true",
      });

      return axios
        .get("/coins/markets", {
          ...config,
          params: new URLSearchParams(params),
        })
        .then((res) => res.data);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
      refetchOnWindowFocus: true,
      refetchInterval: REFRESH_INTERVAL_SECONDS * 1000,
      retry: 1,
    }
  );
};

export const getCategoriesList = () => {
  return useQuery(
    "categories",
    () => axios.get("/coins/categories/list", config).then((res) => res.data),
    {
      retry: 1,
    }
  );
};

export const getCoinsList = () => {
  return useQuery(
    "coins-list",
    () => axios.get("/coins/list", config).then((res) => res.data),
    {
      retry: 1,
    }
  );
};
