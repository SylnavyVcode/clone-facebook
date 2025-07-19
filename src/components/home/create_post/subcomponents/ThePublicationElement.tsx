// import { Post } from "../../../utils/Post";
import { Stories } from "../../../stories/Stories";
import ActualityPost from "../../../ui/ActualityPost";
// import { mockPosts } from "../../../../data/postsDataTest";
// import PostTest from "../../../utils/postTest";

const ThePosterView = () => {
  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto mt-4">
          <Stories />
        </div>
        <ActualityPost></ActualityPost>
      </div>
    </>
  );
};

export default ThePosterView;
