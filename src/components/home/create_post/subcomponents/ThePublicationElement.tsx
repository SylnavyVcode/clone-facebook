// import { Post } from "../../../utils/Post";
import { useEffect, useState } from "react";
import { Stories } from "../../../stories/Stories";
import ActualityPost from "../../../ui/ActualityPost";
// import { mockPosts } from "../../../../data/postsDataTest";
// import PostTest from "../../../utils/postTest";
// Définis le type des props attendus
type ThePosterViewProps = {
  update: boolean; // Remplace 'any' par le type réel de ton user si tu l'as
};
export const ThePosterView = (props: ThePosterViewProps) => {
  console.log(props);
  const [updateB, setUpdateB] = useState<boolean>(props.update);
  useEffect(() => {
    setUpdateB(props.update);
  }, [props.update]);
  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto mt-4">
          <Stories />
        </div>
        <ActualityPost updateB={updateB}></ActualityPost>
      </div>
    </>
  );
};


