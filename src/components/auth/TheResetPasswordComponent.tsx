// import facebook from "../../assets/facebook-icone.svg";
import Footer from "../utils/FooterComponent";
import tuat from "../../assets/images/tuat.jpg"

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../utils/input";
import ButtonElement from "../utils/button";
// import FooterForm from "../utils/footerForm";
import { Auth } from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";
import TheNavbarAuthComponent from "./children/TheNavbarAuth";

interface FormData {
  email: string;
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  email: yup
    .string()
    .email(
      "L'e-mail ou le numéro de mobile entré n'est pas associé à un compte. Trouvez votre compte et connectez-vous."
    )
    .required("Saisissez votre Email"),
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
    const response = await Auth.login(data);
    if (response && response.access_token) {
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("from", "");
      navigate("/home");
    }
    console.log(">>>>>>>>>", response);
  };

  return (
    <>
      {/* <!-- Premiere Section --> */}
      <TheNavbarAuthComponent></TheNavbarAuthComponent>
      <section className="flex justify-center items-center w-full h-full font-sans bg-[#f2f4f7]">
        {/* <!-- Partie Principale --> */}
        <main className="justify-center m-4 p-4">
          <div
            className="px-4 flex justify-center py-3  w-[396px] items-center border border-[#dddfe2] bg-white rounded-xl mb-20"
            style={{
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="w-full">
              <div>
                <p className="text-xl py-2 ">
                  Réinitialiser votre mot de passe
                </p>
              </div>
              <form
                role="form"
                className=" w-full "
                onSubmit={handleSubmit(onSubmit)}
              >
                <hr />
                <div id="reset_password_step_1" className="w-full flex justify-center items-center gap-4">
                  <div>
                    <p className="py-2">
                      Comment voulez-vous recevoir le code pour Réinitialiser
                      votre mot de passe?
                    </p>
                    {/* <!-- Partie email  --> */}
                    <div className="my-3">
                      <Input
                        id="input_email"
                        type="text"
                        placeholder="Adresse e-mail ou numéro de tél."
                        {...register("email")}
                        errorMessage={errors.email?.message}
                        className={
                          "w-full p-3 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="flex-col justify-center items-center text-center">
                    
                    <img src={tuat} alt="Profil picture user" className="w-[14vh] rounded-full m-auto" />
                    <div>valmymabika@gmail.com</div>
                    <div>Facebook user</div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-end items-center gap-4">
                  <ButtonElement
                    id="btn_reset_password_not"
                    title="Not you?"
                    type="submit"
                    className="bg-white hover:bg-slate-200 text-black rounded-lg w-full text-center border my-2 shadow-sm px-4 py-1 font-semibold"
                  ></ButtonElement>
                  <ButtonElement
                    id="btn_reset_password_continue"
                    title="Continuer"
                    type="submit"
                    className="bg-[#1877f2] hover:bg-[#1840f2] text-white rounded-lg w-full text-center my-2 shadow-sm px-4 py-1  font-semibold"
                  ></ButtonElement>
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
