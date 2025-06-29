import ThePostForm from "./subcomponents/TheFormPostComponent";
import ThePosterView from "./subcomponents/ThePublicationElement";
// import TheStory from "./subcomponents/TheStoryComponent";

const ThePostCreate = () => {
  return (
    <>
      <div className="pt-12 lg:pt-12 w-full">
        {/* <!-- STORY --> */}
        {/* <!-- POST FORM --> */}
        <ThePostForm></ThePostForm>
        {/* <!-- END POST FORM --> */}
        {/* <TheStory></TheStory> */}
        {/* <!-- END STORY --> */}
        <ThePosterView></ThePosterView>
        {/* <!-- END LIST POST --> */}
      </div>
    </>
  );
};

export default ThePostCreate;
