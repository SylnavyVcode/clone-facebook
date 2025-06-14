import TheAside from "./aside/TheAsideComponent";
import ThePostCreate from "./create_post/ThePostComponent";
import TheNavBar from "./navbar/TheNavbarComponent";
import TheRightAside from "./right_aside/TheRightAsideComponent";

import { useState, useEffect } from "react";
import { Users } from "../../services/user"; // Importer ta classe contenant getUser

const useUser = (id_user: string | null) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id_user) return;

    const fetchUser = async () => {
      try {
        const userData = await Users.getUser();
        setUser(userData);
      } catch (err) {
        setError("Erreur lors de la récupération de l'utilisateur");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id_user]);

  return { user, loading, error };
};

// console.log(">>>>>>>>>>>>>>>iiiiii", useUser());

const HomeComponent = () => {
  return (
    <>
      <TheNavBar></TheNavBar>
      <div className=" w-full h-[100%] bg-[#F1F2F5]">
        {/* <div className="flex justify-between items-start w-full mx-auto max-w-[1600px] mt-[56px] h-[calc(100%-56px)] px-4"> */}
        <div className="w-full shadow flex  justify-between dark:border-dark-third px-4">
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
};

export default HomeComponent;
