import React, { useEffect, useRef, useState, useCallback } from "react";
import { PostService } from "../../services/post/post";
import { Post } from "../utils/Post";

type Post = {
  id: string;
  content: string;
  image?: string;
  video?: string;
  author_id?: string;
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
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token non trouvé !");
        setLoading(false);
        return;
      }

      const response = await PostService.getAllPostDataWithPagination(page, 10); // <- à créer
      if (response) {
        setItems((prev) => [...prev, ...response.data]);

        console.log(">>>>items", items);
        setHasMore(response.hasMore);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Erreur lors du chargement :", err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMore(); // chargement initial
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader, loadMore]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <Post
            user={{
              name: "Valmy M.",
              profilePic: "src/assets/images/tuat.jpg",
            }}
            images={[item.image ? item.image : ""]}
            date="2h ago"
          >
            {item.content}
          </Post>
          // <div
          //   key={id}
          //   className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
          // >
          //   <h2 className="text-lg font-semibold">{item.content}</h2>
          //   <p className="text-sm text-gray-700">{item.content}</p>
          // </div>
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
