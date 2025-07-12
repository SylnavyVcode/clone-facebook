// components/Post.tsx
import React, { useState } from "react";
import { ThumbsUp, MessageCircle, Share2, Smile } from "lucide-react";
import { Button } from "../ui/Button";

type PostProps = {
  children: React.ReactNode;
  user: {
    name: string;
    profilePic: string;
  };
  date: string;
  images?: string[]; // supporte plusieurs images
};

export const Post: React.FC<PostProps> = ({
  children,
  user,
  date,
  images = [],
}) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow  space-y-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Contenu texte */}
      <p className="text-gray-800 p-4">{children}</p>

      {/* Images en grille */}
      {images.length > 0 && (
        <div
          className={`grid gap-2 ${images.length === 1 ? "" : "grid-cols-2"}`}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post image ${idx + 1}`}
              className="rounded-t-lg object-cover w-full max-h-96"
            />
          ))}
        </div>
      )}

      {/* Compteur de likes et commentaires */}
      <div className="text-sm text-gray-600 border-t pt-2">
        👍 {likes} J’aime · 💬 {comments.length} Commentaires
      </div>

      {/* Boutons d'action */}
      <div className="flex justify-around text-gray-500 text-sm border-t border-b py-2">
        <Button
          onClick={handleLike}
          className="flex items-center gap-1 hover:text-blue-600"
        >
          <ThumbsUp className="w-4 h-4" /> J’aime
        </Button>
        <Button className="flex items-center gap-1 hover:text-blue-600">
          <MessageCircle className="w-4 h-4" /> Commenter
        </Button>
        <Button className="flex items-center gap-1 hover:text-blue-600">
          <Share2 className="w-4 h-4" /> Partager
        </Button>
      </div>

      {/* Champ d’ajout de commentaire */}
      <div className="flex items-center gap-2 mt-2">
        <Smile className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Écrire un commentaire..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleComment()}
        />
      </div>

      {/* Liste des commentaires */}
      <div className="space-y-2">
        {comments.map((c, idx) => (
          <div key={idx} className="bg-gray-100 rounded-lg px-4 py-2 text-sm">
            <span className="font-semibold">{user.name}</span> : {c}
          </div>
        ))}
      </div>
    </div>
  );
};
