// components/Post.tsx
import React from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'; // ou HeroIcons

type PostProps = {
  user: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  content: string;
  imageUrl?: string;
};

export const Post: React.FC<PostProps> = ({ user, date, content, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Contenu */}
      <p className="text-gray-800">{content}</p>

      {/* Image (optionnelle) */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Contenu du post"
          className="w-full max-h-96 object-cover rounded-lg"
        />
      )}

      {/* Actions */}
      <div className="flex justify-around text-gray-500 text-sm border-t border-gray-200 pt-2">
        <button className="flex items-center gap-1 hover:text-blue-600">
          <ThumbsUp className="w-4 h-4" /> J’aime
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <MessageCircle className="w-4 h-4" /> Commenter
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <Share2 className="w-4 h-4" /> Partager
        </button>
      </div>
    </div>
  );
};
