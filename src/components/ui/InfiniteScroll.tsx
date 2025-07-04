import React, { useEffect, useRef, useState, useCallback } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (
  page: number
): Promise<{ data: Post[]; hasMore: boolean }> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  const data: Post[] = await res.json();
  return { data, hasMore: data.length > 0 };
};

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetchPosts(page);
      setItems((prev) => [...prev, ...res.data]);
      setHasMore(res.hasMore);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Erreur lors du chargement :", err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMore();
  }, []); // initial load

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, loadMore]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center py-6 text-gray-500">Chargement...</div>
      )}

      <div ref={loader} className="h-10"></div>
    </div>
  );
};

export default InfiniteScroll;
