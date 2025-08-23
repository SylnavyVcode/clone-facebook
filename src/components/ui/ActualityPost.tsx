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

type ViewProps = {
  updateB: true | false;
};

const ActualityPost = (props: ViewProps) => {
  console.log(props);
  const updateC = props.updateB;
  const [items, setItems] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);
  const [dataTemp, setDataTemp] = useState<any[]>([]);

  // Fonction de chargement des données
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

      const response = await PostService.getAllPostDataWithPagination(page, 10);
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
          videos: element.video || [],
          images: element.image || [],
          createdAt: element.createdAt,
        }));

        // Ajoute les nouveaux éléments transformés
        setDataTemp((prev) => [...prev, ...transformed]);
        
        setHasMore(response.hasMore);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Erreur lors du chargement :", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [page, loading, hasMore]); // Suppression de dataTemp des dépendances

  // Réinitialisation quand updateC change
  useEffect(() => {
    if (updateC === true) {
      setItems([]);        // Réinitialiser items aussi
      setDataTemp([]);
      setPage(1);
      setHasMore(true);
      setLoading(false);
    }
  }, [updateC]);

  // Chargement initial uniquement
  useEffect(() => {
    if (page === 1 && dataTemp.length === 0) {
      loadMore();
    }
  }, [page, dataTemp.length]); // Dépendances spécifiques pour éviter les boucles

  // Observer pour l'infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading && hasMore) {
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
  }, [loadMore, loading, hasMore]); // Dépendances correctes

  return (
    <div className="max-w-xl mx-auto">
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