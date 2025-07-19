import React, { useEffect, useRef, useState, useCallback } from "react";
import { PostService } from "../../services/post/post";
import { Post } from "../utils/Post";
import PostTest from "../utils/postTest";

type Post = {
  id: string;
  author: any;
  content: string;
  image?: any;
  comments?: string;
  video?: any;
  author_id?: string;
  createdAt: string;
};

const ActualityPost: React.FC = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);

  const [dataTemp, setDataTemp] = useState<any[]>([]);

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
        console.log(">>>>response.data>", response.data);

        const transformed = response.data.map((element: Post) => ({
          id: element.id,
          user: {
            name: `${element.author.firstname} ${element.author.lastname}`,
            profilePic: element.author.profilePic,
          },
          content: element.content,
          videos: element.video ? JSON.parse(element.video) : [],
          images: element.image ? JSON.parse(element.image) : [],
          createdAt: element.createdAt,
        }));

        // Ajoute les nouveaux éléments transformés à ceux déjà existants
        setDataTemp((prev) => [...prev, ...transformed]);
        console.log(">>>>erere>", dataTemp);

        setHasMore(response.hasMore);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Erreur lors du chargement :", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      // setLoading(false);
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
    <div className="max-w-xl mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4">Infinite Scroll</h1> */}
      <div className="space-y-4">
        {dataTemp.map((post_test) => (
          <PostTest key={post_test.id} post={post_test} />
        ))}
      </div>

      {loading && (
        <div className="text-center py-6 text-gray-500">Chargement...</div>
      )}

      <div ref={loader} className="h-10"></div>
    </div>
  );
};

export default ActualityPost;
