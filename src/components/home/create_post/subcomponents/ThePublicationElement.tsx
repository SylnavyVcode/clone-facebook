import { Post } from "../../../utils/Post";
import { Stories } from "../../../stories/Stories";
import InfiniteScroll from "../../../ui/InfiniteScroll";
import { mockPosts } from "../../../../data/postsDataTest";
import PostTest from "../../../utils/postTest";

const ThePosterView = () => {
  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto mt-4">
          <Stories />
        </div>
        <div>
          {mockPosts.map((post_test) => (
            <PostTest key={post_test.id} post={post_test} />
          ))}
        </div>
        <Post
          user={{ name: "Valmy M.", profilePic: "src/assets/images/tuat.jpg" }}
          images={[
            "src/assets/images/tuat.jpg",
            "src/assets/images/tuat.jpg",
            "src/assets/images/tuat.jpg",
          ]}
          date="2h ago"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          autem earum cum ullam odio, molestias maxime aperiam in id aspernatur
          vel ratione odit molestiae minus ipsa obcaecati quia! Doloribus,
          illum.
        </Post>
        <InfiniteScroll></InfiniteScroll>
      </div>
    </>
  );
};

export default ThePosterView;
