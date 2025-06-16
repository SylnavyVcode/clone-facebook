import TheAside from "./aside/TheAsideComponent";
import ThePostCreate from "./create_post/ThePostComponent";
import TheNavBar from "./navbar/TheNavbarComponent";
import TheRightAside from "./right_aside/TheRightAsideComponent";

import { useState, useEffect } from "react";
import { Users } from "../../services/user"; // Importer ta classe contenant getUser

const HomeComponent = () => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const user = async () => {
      try {
        const dataUser = await Users.getUser();
        setUser(dataUser);
      } catch (error) {
        console.log("error get user =>>>", error);
      }
    };
    user();
  }, []);

  console.log("user =====>>>", user);
  if (user?.length > 0) {
    return (
      <>
        <TheNavBar></TheNavBar>
        <div className=" w-full h-[100%] bg-[#F1F2F5]">
          {/* <div className="flex justify-between items-start w-full mx-auto max-w-[1600px] mt-[56px] h-[calc(100%-56px)] px-4"> */}
          <div className="w-full shadow flex  justify-between dark:border-dark-third ">
            {/* <div className="grid grid-rows-3 grid-flow-col w-full mx-auto max-w-[1600px] mt-[56px] h-[calc(100%-56px)] px-4"> */}
            <div className="w-full md:w-[22%] hidden md:block overflow-auto">
              <TheAside></TheAside>
            </div>

            <div
              id="fb_posts_section"
              className="w-full md:w-[56%] flex justify-center "
            >
              <ThePostCreate></ThePostCreate>
            </div>
            <div className="w-full md:w-[22%] hidden md:block">
              <TheRightAside></TheRightAside>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="m-auto text-center">
            <p>Nous n'avons pas pu vous connecter, veuillez réessayer.</p>
            <button className="border px-4 p-2 text-center text-md bg-blue-600 text-gray-100 font-bold">
              Reessayez
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default HomeComponent;
