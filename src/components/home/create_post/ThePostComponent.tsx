import ThePostForm from "./subcomponents/TheFormPostComponent";
import ThePosterView from "./subcomponents/ThePublicationElement";

const ThePostCreate = () => {
  return (
    <>
      <div className="pt-12 lg:pt-12 w-full  bg-[#F1F2F5] h-full">
   
        {/* <!-- POST FORM --> */}
        <ThePostForm></ThePostForm>
        {/* <!-- END POST FORM --> */}
        {/* <!-- END STORY --> */}
        <ThePosterView></ThePosterView>
        {/* <!-- END LIST POST --> */}
      </div>
    </>
  );
};

export default ThePostCreate;
