import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = ({ onLoadMore, hasMore, children }) => {
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      onLoadMore();
    }
  }, []);

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
