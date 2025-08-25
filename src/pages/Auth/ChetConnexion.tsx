import { useNavigate } from "react-router";
import { Users } from "../../services/user";

export const useFetchDataUser = () => {
  const navigate = useNavigate();

  const fetchUser = async (redirectPath: string) => {
    try {
      const token = localStorage.getItem("token");
      const userData = await Users.getUser();

      if (!userData || (userData.length === 0 && !token)) {
        navigate("/");
      } else {
        navigate(`/${redirectPath}`);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
      navigate("/");
    }
  };

  return { fetchUser };
};
