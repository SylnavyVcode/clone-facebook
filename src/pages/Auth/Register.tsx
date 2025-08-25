import { useEffect } from "react";
import RegisterComponent from "../../features/auth/TheRegisterComponent";
import { useFetchDataUser } from "./ChetConnexion";

const Register = () => {
const { fetchUser } = useFetchDataUser();
useEffect(() => {
  fetchUser("home");
}, []);
  return (
    <>
      <RegisterComponent></RegisterComponent>
    </>
  );
};

export default Register;
