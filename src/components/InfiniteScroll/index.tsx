import { useEffect, useRef } from "react";

interface Props {
  onLoadMore: () => void;
  hasMore: boolean;
  children: JSX.Element;
}

const InfiniteScroll = ({ onLoadMore, hasMore, children }: Props) => {
  const loader = useRef(null);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasMore) await onLoadMore();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [onLoadMore, hasMore]);

  return (
    <div>
      {children}
      <div ref={loader} />
    </div>
  );
};

export default InfiniteScroll;
