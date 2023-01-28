import Spinner from "@/components/Spinner";
import Cards from "@/components/Cards";
import InfiniteScroll from "@/components/InfiniteScroll";
import GroupButton from "@/components/GroupButton";
import useGetCoinsMarketList from "@/hooks/getCoinsMarketList";
import { CURRENCIES, GROUPS_LIST, ORDER } from "@/utils/constants";
import { useMemo } from "react";
import FilterOptions from "@/components/FilterOptions";
import { getCategoriesList } from "@/utils/query";

interface ListProps {
  id: string;
  name: string;
}

const Market = () => {
  const {
    isLoading,
    data,
    favorites,
    loadMore,
    saveFavorites,
    filters,
    setFilters,
    hasMore,
  } = useGetCoinsMarketList();

  const { data: categories } = getCategoriesList();

  const CATEGORIES = useMemo(
    () =>
      categories?.map((category: { category_id: string; name: string }) => ({
        id: category.category_id,
        name: category.name,
      })) || [],

    [categories]
  );

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getLabel = (list: ListProps[], id?: string) => {
    return list.find((item: ListProps) => item.id === id)?.name;
  };

  return (
    <div className="w-full pt-10 ">
      <div className="m-2 flex items-center justify-between pb-4">
        <GroupButton
          selectOptions={GROUPS_LIST}
          selectedOption={filters.groupBy}
          selectOption={(group: string) =>
            setFilters({ ...filters, groupBy: group })
          }
        />
        <div className="flex gap-2">
          <FilterOptions
            label="Category"
            filterOptions={CATEGORIES}
            selectedOption={getLabel(CATEGORIES, filters.category)}
            setOptionCallback={(value?: string) =>
              setFilters({ ...filters, category: value })
            }
            includeClear
          />
          <FilterOptions
            label="Currencies"
            filterOptions={CURRENCIES}
            selectedOption={getLabel(CURRENCIES, filters.currency)}
            setOptionCallback={(value?: string) =>
              setFilters({ ...filters, currency: value })
            }
          />
          <FilterOptions
            label="Order"
            filterOptions={ORDER}
            selectedOption={getLabel(ORDER, filters.order)}
            setOptionCallback={(value?: string) =>
              setFilters({ ...filters, order: value })
            }
          />
        </div>
      </div>

      <InfiniteScroll onLoadMore={loadMore} hasMore={hasMore}>
        <div className="px-20">
          <Cards
            cards={data}
            favorites={favorites}
            saveFavorites={saveFavorites}
            currency={filters.currency || ""}
          />
          {isLoading ? <Spinner /> : null}
          <div className="go-top" onClick={goTop}>
            ☝️
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Market;
