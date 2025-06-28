// components/CreateStoryCard.tsx
import React from 'react';
import { Plus } from 'lucide-react';

export const CreateStoryCard = () => {
  return (
    <div className="relative w-[120px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col items-center justify-center cursor-pointer">
      <img
        src="https://i.pravatar.cc/100?img=5"
        className="w-full h-3/5 object-cover"
        alt="create story"
      />
      <div className="flex flex-col items-center p-2">
        <div className="bg-blue-600 p-1 rounded-full">
          <Plus className="text-white w-5 h-5" />
        </div>
        <p className="text-sm mt-1 font-semibold text-center">Create story</p>
      </div>
    </div>
  );
};
