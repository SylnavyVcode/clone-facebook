import { useEffect, useRef, useState, useCallback } from "react";
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
  updateCounter: number; // ✅ Changé de updateB vers updateCounter
};

const ActualityPost = ({ updateCounter }: ViewProps) => {
  console.log("ActualityPost - updateCounter reçu:", updateCounter);
  
  const [items, setItems] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);
  const [dataTemp, setDataTemp] = useState<any[]>([]);

  // ✅ Fonction pour réinitialiser complètement les données
  const resetData = useCallback(() => {
    console.log("Réinitialisation des données...");
    setItems([]);
    setDataTemp([]);
    setPage(1);
    setHasMore(true);
    setLoading(false);
  }, []);

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

      console.log(`Chargement de la page ${page}...`);
      const response = await PostService.getAllPostDataWithPagination(page, 10);
      
      if (response) {
        // ✅ Si c'est la page 1, remplacer les données au lieu d'ajouter
        if (page === 1) {
          setItems(response.data);
          console.log(">>>>Première page - données remplacées>", response.data);
        } else {
          setItems((prev) => [...prev, ...response.data]);
          console.log(">>>>Page suivante - données ajoutées>", response.data);
        }

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

        // ✅ Même logique pour les données transformées
        if (page === 1) {
          setDataTemp(transformed);
        } else {
          setDataTemp((prev) => [...prev, ...transformed]);
        }
        
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
  }, [page, loading, hasMore]);

  // ✅ Réinitialisation et rechargement quand updateCounter change
  useEffect(() => {
    if (updateCounter > 0) { // Éviter le premier appel inutile
      console.log("Update détecté - Rechargement des posts...");
      resetData();
      // Le rechargement se fera dans l'effect suivant quand page devient 1
    }
  }, [updateCounter, resetData]);

  // ✅ Chargement initial et rechargement après reset
  useEffect(() => {
    if (page === 1 && dataTemp.length === 0 && !loading) {
      console.log("Déclenchement du chargement initial ou après reset");
      loadMore();
    }
  }, [page, dataTemp.length, loading, loadMore]);

  // Observer pour l'infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading && hasMore) {
          console.log("Intersection détectée - Chargement de la page suivante");
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
  }, [loadMore, loading, hasMore]);

  return (
    <div className="max-w-xl mx-auto">
      <div className="space-y-4">
        {dataTemp.map((post_test) => (
          <PostTest key={post_test.id} post={post_test} />
        ))}
      </div>

      {loading && (
        <div className="text-center py-6 text-gray-500">
          Chargement...
          {/* ✅ Indicateur visuel du rechargement */}
          {page === 1 && updateCounter > 0 && (
            <span className="block text-sm text-blue-500">
              Mise à jour des posts...
            </span>
          )}
        </div>
      )}

      {/* ✅ Message quand aucun post */}
      {!loading && dataTemp.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          Aucun post à afficher
        </div>
      )}

      <div ref={loader} className="h-10"></div>
    </div>
  );
};

export default ActualityPost;