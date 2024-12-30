import TheAside from "./aside/TheAsideComponent";
import ThePostCreate from "./create_post/ThePostComponent";
import TheNavBar from "./navbar/TheNavbarComponent";
import TheRightAside from "./right_aside/TheRightAsideComponent";

const HomeComponent = () => {
  return (
    <>
      <TheNavBar></TheNavBar>
      <div className="fixed w-full h-[100%] bg-[#F1F2F5]">
        <div className="grid grid-rows-3 grid-flow-col w-full mx-auto max-w-[1600px] mt-[56px] h-[calc(100%-56px)] px-4">
          <TheAside></TheAside>
          <div
            id="fb_posts_section"
            className="row-span-6 max-w-[600px] lg:mx-0 mx-auto overflow-auto"
          >
            <ThePostCreate></ThePostCreate>
          </div>
          <TheRightAside></TheRightAside>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
