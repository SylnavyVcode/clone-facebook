// components/StoryCard.tsx
import React from 'react';

type StoryCardProps = {
  userName: string;
  avatar: string;
  image: string;
};

export const StoryCard: React.FC<StoryCardProps> = ({ userName, avatar, image }) => {
  return (
    <div className="relative w-[120px] h-[200px] rounded-xl overflow-hidden shadow-md cursor-pointer group">
      <img src={image} alt="story" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />

      <div className="absolute top-2 left-2">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full border-4 border-blue-500" />
      </div>

      <div className="absolute bottom-2 left-2 right-2 text-white font-semibold text-sm leading-tight drop-shadow">
        {userName}
      </div>
    </div>
  );
};
