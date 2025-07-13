import TheAside from "./aside/TheAsideComponent";
import ThePostCreate from "./create_post/ThePostComponent";
import TheNavBar from "./navbar/navbar";
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
        <div className=" w-full h-full bg-[#F1F2F5]">
          <div className="w-full shadow flex justify-between dark:border-dark-third ">
            <div className="w-full md:w-[22%] hidden fixed md:flex justify-start h-screen overflow-auto ">
              <TheAside></TheAside>
            </div>
            <div
              id="fb_posts_section"
              className="w-full md:w-[56%] flex justify-center m-auto  bg-[#F1F2F5] "
            >
              <div className="mt-4 px-8 sm:px-0 sm:w-[500px] h-full ">
                <ThePostCreate></ThePostCreate>
              </div>
            </div>
            <div className="w-full md:w-[22%] right-0 fixed mt-8 hidden md:flex justify-center h-screen ">
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
            <span className="loader"></span>
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
