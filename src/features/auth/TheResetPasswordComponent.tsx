// import facebook from "../../assets/facebook-icone.svg";
import Footer from "../utils/FooterComponent";
import tuat from "../../assets/images/tuat.jpg";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../utils/input";
import {Button} from "../utils/button";
// import FooterForm from "../utils/footerForm";
import { Auth } from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";
import facebook from "../../assets/facebook-icone.svg";

interface FormData {
  new_password: string;
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  new_password: yup
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
    .max(16, "Le mot de passe doit contenir au plus 16 caractères.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial."
    )
    .required("Saisissez votre nouveau mot de passe"),
});

function ResetPasswordComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigate = useNavigate(); // Hook pour la navigation

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Données du formulaire : ", data);
    const response = await Auth.resetPassword(data);
    if (response && response.code === 200) {
      console.log(">>>>>>>>> response data", response);

      // navigate("/home");
    }
    console.log(">>>>>>>>>", response);
  };

  return (
    <>
      {/* <!-- Premiere Section --> */}
      <section className=" w-full font-sans bg-[#f2f4f7]">
        {/* <!-- Partie Principale --> */}
        <main className="w-full">
          <div
            className=" flex justify-center items-center border border-[#dddfe2] bg-white"
            style={{
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="w-full">
              <div
                role="form"
                className="flex justify-between text-sm items-center w-full m-1 mx-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1 className="text-blue-500 text-center flex justify-start items-center font-semibold  max-md:hidden ">
                  <img
                    className="w-[24vh]"
                    src={facebook}
                    alt="logo de facebook"
                  />
                </h1>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="flex justify-center items-center w-full h-full font-sans bg-[#f2f4f7]">
        {/* <!-- Partie Principale --> */}
        <main className="justify-center m-4 p-4">
          <div
            className="px-4 flex justify-center py-3  w-[500px] items-center border border-[#dddfe2] bg-white rounded-xl my-12"
            style={{
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="w-full">
              <div>
                <p className="text-xl pb-2 mb-1 font-bold">
                  Choisissez votre nouveau mot de passe
                </p>
              </div>
              <form
                role="form"
                className=" w-full "
                onSubmit={handleSubmit(onSubmit)}
              >
                <hr />
                <div
                  id="reset_password_step_1"
                  className="w-full flex-col justify-center items-center gap-4"
                >
                  <div>
                    <p className="py-2">
                      Create a new password that is at least 6 characters long.
                      A strong password is combination of letters, numbers, and
                      punctuation marks.
                    </p>
                    {/* <!-- Partie new_password  --> */}
                    <div className="my-3">
                      <Input
                        id="input_new_password"
                        type="password"
                        placeholder="Nouveau mot de passe"
                        {...register("new_password")}
                        errorMessage={errors.new_password?.message}
                        className={
                          "w-full p-3 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-end items-center gap-4">
                  <Button
                    id="btn_reset_password_not"
                    type="submit"
                    className="bg-white hover:bg-slate-200 text-black rounded-lg w-full text-center border my-2 shadow-sm px-4 py-1 font-semibold"
                  >Ignorer</Button>
                  <Button
                    id="btn_reset_password_continue"
                    type="submit"
                    className="bg-[#1877f2] hover:bg-[#1840f2] text-white rounded-lg w-full text-center my-2 shadow-sm px-4 py-1  font-semibold"
                  >Continuer</Button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>

      <Footer></Footer>
    </>
  );
}

export default ResetPasswordComponent;
