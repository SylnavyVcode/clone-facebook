import { useEffect } from "react";
import ValidateComponent from "../../features/auth/TheValidateComponent";
import { useFetchDataUser } from "./ChetConnexion";

const ValidatePassword = () => {
  const { fetchUser } = useFetchDataUser();
  useEffect(() => {
    fetchUser("home");
  }, []);
  return (
    <>
      <ValidateComponent></ValidateComponent>
    </>
  );
};

export default ValidatePassword;
