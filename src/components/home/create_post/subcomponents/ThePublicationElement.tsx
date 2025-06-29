import { Post } from "../../../utils/Post";
import { Stories } from "../../../stories/Stories";

// import TheFluxElements from "../flux/TheFluxComponent";

const ThePosterView = () => {
  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto mt-4">
          <Stories />
        </div>
        <Post
          user={{ name: "Valmy M.", avatarUrl: "src/assets/images/tuat.jpg" }}
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
      </div>
    </>
  );
};

export default ThePosterView;
