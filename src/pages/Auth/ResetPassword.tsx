import { useEffect } from "react";
import ResetPasswordComponent from "../../features/auth/TheResetPasswordComponent";
import { useFetchDataUser } from "./ChetConnexion";

const ResetPassword = () => {
  const { fetchUser } = useFetchDataUser();
  useEffect(() => {
    fetchUser("home");
  }, []);
  return (
    <>
      <ResetPasswordComponent CODE={""}></ResetPasswordComponent>
    </>
  );
};

export default ResetPassword;
