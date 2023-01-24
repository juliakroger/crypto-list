import { useEffect, useState } from "react";
import { ListOfCoins } from "@/utils/types";
import { getMarketCap } from "@/utils/query";
import { REFRESH_INTERVAL_SECONDS, ITEMS_PER_PAGE } from "@/utils/constants";

const FAVORITES_KEY = "crypto-list-favorites";

const useGetCoinsMarketList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ListOfCoins>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageHidden, setPageHidden] = useState(false);

  const getInitialData = async () => {
    setIsLoading(true);
    const [res] = await getMarketCap({ page: 1 });
    setData(res);
    setIsLoading(false);
  };

  const loadMore = async () => {
    setIsLoading(true);
    const newPage = page + 1;
    const [res] = await getMarketCap({ page: newPage });

    if (res) {
      setPage(newPage);
      setData((prev) => [...(prev || []), ...res]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    const items = localStorage.getItem(FAVORITES_KEY);
    if (items) setFavorites(JSON.parse(items) || []);
  }, []);

  const handleVisibilityChange = () => {
    setPageHidden(document.hidden);
  };

  document.addEventListener("visibilitychange", handleVisibilityChange, false);

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
    isLoading,
    data,
    favorites,
    loadMore,
    saveFavorites,
  };
};

export default useGetCoinsMarketList;
