// components/Post.tsx
import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import PostMediaGrid from "./PostMediaGrid";

type Media = {
  type: "image" | "video";
  url: string;
};

type PostProps = {
  post: {
    id: string;
    user: {
      name: string;
      avatarUrl: string;
    };
    content: string;
    media: any[];
    createdAt: string;
  };
};

const PostTest: React.FC<{ post: PostProps["post"] }> = ({ post }) => {
  const renderMedia = () => {
    const images = post.media.filter((m) => m.type === "image");
    const videos = post.media.filter((m) => m.type === "video");

    return (
      <>
        {images.length > 0 && <PostMediaGrid media={images} />}
        {videos.map((video, idx) => (
          <video
            key={idx}
            controls
            className="rounded-lg mt-2 w-full max-h-[500px]"
          >
            <source src={video.url} type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
        ))}
      </>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm  mb-3">
      {/* Header */}
      <div className="flex items-center gap-3 py-2 px-4">
        <Avatar src={post.user.avatarUrl} size="md" />
        <div>
          <h4 className="font-semibold text-sm">{post.user.name}</h4>
          <span className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Content */}
      <p className="my-1 text-sm text-gray-800 whitespace-pre-line px-4">
        {post.content}
      </p>

      {/* Media */}
      {renderMedia()}

      {/* Actions */}
      <div className="flex justify-between border-t border-gray-200 py-2 px-4 text-sm text-gray-600">
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <ThumbsUp size={16} /> J’aime
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <MessageCircle size={16} /> Commenter
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Share2 size={16} /> Partager
        </Button>
      </div>
    </div>
  );
};

export default PostTest;
