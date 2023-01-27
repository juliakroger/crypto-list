import { useEffect, useMemo, useState } from "react";
import { getMarketCap } from "@/utils/query";
import { GROUPS } from "@/utils/constants";

const FAVORITES_KEY = "crypto-list-favorites";

interface FiltersProps {
  groupBy: string;
  category?: string;
  currency?: string;
  order?: string;
}

const useGetCoinsMarketList = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filters, setFilters] = useState<FiltersProps>({
    groupBy: GROUPS.ALL,
    category: undefined,
    currency: "usd",
    order: "gecko_desc",
  });

  const {
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
    data: paginatedData,
  } = getMarketCap({
    groupBy: filters.groupBy,
    vs_currency: filters.currency,
    category: filters.category,
    order: filters.order,
    ids: favorites,
  });

  const data = useMemo(
    () => paginatedData?.pages.flatMap((page: any[]) => page || []),
    [paginatedData]
  );

  useEffect(() => {
    const items = localStorage.getItem(FAVORITES_KEY);
    if (items) setFavorites(JSON.parse(items) || []);
  }, []);

  const saveFavorites = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  return {
    hasMore: Boolean(hasNextPage) && !error,
    isLoading: isLoading || isFetchingNextPage || isFetching,
    data,
    favorites,
    loadMore: fetchNextPage,
    saveFavorites,
    filters,
    setFilters,
  };
};

export default useGetCoinsMarketList;
