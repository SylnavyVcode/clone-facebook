import { useState } from "react";
import ThePostForm from "./subcomponents/TheFormPostComponent";
import { ThePosterView } from "./subcomponents/ThePublicationElement";

const ThePostCreate = () => {
  const [update, setUpdade] = useState<boolean>(false)
  const updateData = () => {
    setUpdade(true)
  }
  return (
    <>
      <div className="pt-12 lg:pt-12 w-full  bg-[#F1F2F5] h-full">
   
        {/* <!-- POST FORM --> */}
        <ThePostForm  onUpdateDateForm={() => updateData}></ThePostForm>
        {/* <!-- END POST FORM --> */}
        {/* <!-- END STORY --> */}
        <ThePosterView update={update}></ThePosterView>
        {/* <!-- END LIST POST --> */}
      </div>
    </>
  );
};

export default ThePostCreate;
