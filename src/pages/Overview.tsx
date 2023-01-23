import { useState } from "react";
import Spinner from "@/components/Spinner";
import Cards from "@/components/Cards";
import InfiniteScroll from "@/components/InfiniteScroll";
import GroupButton from "@/components/GroupButton";
import useGetCoinsMarketList from "@/hooks/getCoinsMarketList";

const Overview = () => {
  const { isLoading, data, favorites, loadMore, saveFavorites } =
    useGetCoinsMarketList();

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full pt-10 px-20">
      <InfiniteScroll
        onLoadMore={loadMore}
        hasMore={true}
        isLoading={isLoading}
      >
        <>
          <Cards
            cards={data}
            favorites={favorites}
            saveFavorites={saveFavorites}
          />
          {isLoading ? <Spinner /> : null}
          <div className="go-top" onClick={goTop}>
            ☝️
          </div>
        </>
      </InfiniteScroll>
    </div>
  );
};

export default Overview;
