import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import InfiniteScroll from "@/components/InfiniteScroll";
import { getMarketCap } from "@/utils/query";
import { REFRESH_INTERVAL_SECONDS, ITEMS_PER_PAGE } from "@/utils/constants";
import { ListOfCoins } from "@/utils/types";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);

  const [page, setPage] = useState(1);
  const [data, setData] = useState<ListOfCoins>();

  const getInitialData = async () => {
    const [res] = await getMarketCap(page);
    setData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pageHidden) {
      console.log("Pause refreshing for inactivity.");
    } else {
      console.log("Start refreshing.");

      const interval = setInterval(async () => {
        console.log(`Refreshing page data.`);
        setIsRefreshing(true);
        let page = 1;
        setPage((prev) => {
          page = prev;
          return prev;
        });

        const [res] = await getMarketCap(1, page * ITEMS_PER_PAGE);
        setData(res);
        setIsRefreshing(false);
      }, REFRESH_INTERVAL_SECONDS * 1000);
      return () => clearInterval(interval);
    }
  }, [pageHidden]);

  const handleVisibilityChange = () => {
    setPageHidden(document.hidden);
  };

  document.addEventListener("visibilitychange", handleVisibilityChange, false);

  const loadMore = async () => {
    setIsLoading(true);
    const newPage = page + 1;
    const [res] = await getMarketCap(newPage);

    if (res) {
      setPage(newPage);
      setData((prev) => [...(prev || []), ...res]);
      setIsLoading(false);
    }
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen lg:p-14">
      <Header />
      <InfiniteScroll onLoadMore={loadMore} hasMore={true}>
        <>
          <Cards cards={data} />
          {isLoading ? <Spinner /> : null}
          <div className="go-top" onClick={goTop}>
            ☝️
          </div>
        </>
      </InfiniteScroll>
    </div>
  );
};

export default App;
