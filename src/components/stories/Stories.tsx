import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { stories } from "../../data/stories";
import { CreateStoryCard } from "./CreateStory";
import { StoryCard } from "./StoryCard";

const VISIBLE_COUNT = 4;

export const Stories = () => {
  const [startIndex, setStartIndex] = useState(0);

  const totalStories = [null, ...stories]; // null = bouton Create story
  const maxIndex = totalStories.length - VISIBLE_COUNT;

  const handleLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
    }
  };

  const handleRight = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 4);
    }
  };

  const visibleStories = totalStories.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <div className="relative w-full max-w-5xl mx-auto px-2 py-4 overflow-hidden">
      {/* Flèche gauche */}
      {startIndex > 0 && (
        <button
          onClick={handleLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft />
        </button>
      )}

      {/* Stories */}
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out translate-x-1"
        style={{
          transform: `translateX(100% * ${startIndex})`,
        }}
      >
        {visibleStories.map((story, index) =>
          story === null ? (
            <CreateStoryCard key="create" />
          ) : (
            <StoryCard
              key={index}
              userName={story.userName}
              avatar={story.avatar}
              image={story.image}
            />
          )
        )}
      </div>

      {/* Flèche droite */}
      {startIndex < maxIndex && (
        <button
          onClick={handleRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-5 bg-white p-1 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};
