import { useEffect } from "react";
import ResetComponent from "../../features/auth/TheResetComponent";
import { useFetchDataUser } from "./ChetConnexion";

const Reset= () => {
  const { fetchUser } = useFetchDataUser();
useEffect(() => {
  fetchUser("home");
}, []);
  return (
    <>
      <ResetComponent></ResetComponent>
    </>
  );
};

export default Reset;
