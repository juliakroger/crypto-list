import React, { useCallback, useEffect, useRef } from "react";

const InfiniteScroll = ({ isLoading, onLoadMore, hasMore, children }) => {
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (hasMore && !isLoading) {
        onLoadMore();
      }
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
