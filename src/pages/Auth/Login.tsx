
import { useEffect } from "react";
import LoginComponent from "../../features/auth/TheLoginComponent";
import { useFetchDataUser } from "./ChetConnexion";

const Login = () => {
 const { fetchUser } = useFetchDataUser();
useEffect(() => {
  fetchUser("home");
}, []);
  return (
    <>
      <LoginComponent></LoginComponent>
    </>
  );
};

export default Login;