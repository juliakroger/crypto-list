import { useCallback, useEffect, useState } from "react";
import { ListOfCoins } from "@/utils/types";
import { getMarketCap } from "@/utils/query";
import { REFRESH_INTERVAL_SECONDS, ITEMS_PER_PAGE } from "@/utils/constants";
import { GROUPS } from "@/utils/constants";

const FAVORITES_KEY = "crypto-list-favorites";

interface FiltersProps {
  groupBy: string;
  category?: string;
  currency?: string;
  order?: string;
}

const useGetCoinsMarketList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ListOfCoins>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageHidden, setPageHidden] = useState(false);

  const [filters, setFilters] = useState<FiltersProps>({
    groupBy: GROUPS.ALL,
    category: undefined,
    currency: "usd",
    order: "gecko_desc",
  });

  const getInitialData = useCallback(async () => {
    setIsLoading(true);

    const [res] = await getMarketCap({
      page: 1,
      itensPerPage:
        filters.groupBy === GROUPS.FAVORITES
          ? favorites.length
          : ITEMS_PER_PAGE,
      ids:
        filters.groupBy === GROUPS.FAVORITES ? favorites.join(",") : undefined,
      vs_currency: filters.currency,
      category: filters.category,
      order: filters.order,
    });
    setData(res);
    setIsLoading(false);
  }, [filters]);

  const loadMore = useCallback(async () => {
    if (filters.groupBy === GROUPS.FAVORITES) return;

    setIsLoading(true);
    const newPage = page + 1;
    const [res] = await getMarketCap({
      page: newPage,
      vs_currency: filters.currency,
      category: filters.category,
      order: filters.order,
    });

    if (res) {
      setPage(newPage);
      setData((prev) => [...(prev || []), ...res]);
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    getInitialData();
  }, [filters]);

  useEffect(() => {
    const items = localStorage.getItem(FAVORITES_KEY);
    if (items) setFavorites(JSON.parse(items) || []);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageHidden(document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      false
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
        false
      );
    };
  }, []);

  useEffect(() => {
    if (pageHidden) {
      console.log("Pause refreshing for inactivity.");
    } else {
      console.log("Start refreshing.");

      const interval = setInterval(async () => {
        console.log(`Refreshing page data.`);
        let page = 1;
        setPage((prev) => {
          page = prev;
          return prev;
        });

        const [res] = await getMarketCap({
          page: 1,
          itensPerPage: page * ITEMS_PER_PAGE,
          ids: favorites.join(","),
          vs_currency: filters.currency,
          category: filters.category,
          order: filters.order,
        });
        setData(res);
      }, REFRESH_INTERVAL_SECONDS * 1000);
      return () => clearInterval(interval);
    }
  }, [pageHidden]);

  const saveFavorites = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  return {
    isLoading: isLoading && filters.groupBy !== GROUPS.FAVORITES,
    data,
    favorites,
    loadMore: filters.groupBy === GROUPS.FAVORITES ? () => {} : loadMore,
    saveFavorites,
    filters,
    setFilters,
  };
};

export default useGetCoinsMarketList;
