import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Users } from "../../services/user";

import TheAside from "./aside/TheAsideComponent";
import ThePostCreate from "./create_post/ThePostComponent";
import TheNavBar from "./navbar/navbar";
import TheRightAside from "./right_aside/TheRightAsideComponent";

const HomeComponent = () => {
  const [dataUser, setDataUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Users.getUser();
        if (!userData || userData.length === 0) {
          navigate("/");
          return;
        }
        setDataUser(userData[0]);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        );
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loader"></span>
        <p>Chargement en cours...</p>
      </div>
    );
  }

  if (!dataUser) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="m-auto text-center">
          <span className="loader"></span>
          <p>Nous n'avons pas pu vous connecter, veuillez réessayer.</p>
          <button
            onClick={() => window.location.reload()}
            className="border px-4 p-2 text-center text-md bg-blue-600 text-gray-100 font-bold"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <TheNavBar data={dataUser} />
      <div className="w-full h-full bg-[#F1F2F5]">
        <div className="w-full shadow flex justify-between dark:border-dark-third">
          <div className="w-full md:w-[22%] hidden fixed md:flex justify-start h-screen overflow-auto">
            <TheAside data={dataUser} />
          </div>
          <div
            id="fb_posts_section"
            className="w-full md:w-[56%] flex justify-center m-auto bg-[#F1F2F5]"
          >
            <div className="mt-4 px-8 sm:px-0 sm:w-[500px] h-full">
              <ThePostCreate data={dataUser} />
            </div>
          </div>
          <div className="w-full md:w-[22%] right-0 fixed mt-8 hidden md:flex justify-center h-screen">
            <TheRightAside data={dataUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
