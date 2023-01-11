import { useCallback, useEffect, useRef } from "react";

interface Props {
  onLoadMore: () => void;
  hasMore: boolean;
  children: JSX.Element;
}

const InfiniteScroll = ({ onLoadMore, hasMore, children }: Props) => {
  const loader = useRef(null);

  const handleObserver = useCallback(
    (entries: { isIntersecting: boolean }[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        onLoadMore();
      }
    },
    []
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      {children}
      <div ref={loader} />
    </div>
  );
};

export default InfiniteScroll;
