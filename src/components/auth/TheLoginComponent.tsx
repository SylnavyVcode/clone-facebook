import facebook from "../../assets/facebook-icone.svg";
import Footer from "../utils/FooterComponent";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../utils/InputComponent";

interface FormData {
  email: string;
  password: string;
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  email: yup
    .string()
    .email(
      "L’e-mail ou le numéro de mobile entré n’est pas associé à un compte. Trouvez votre compte et connectez-vous."
    )
    .required("Saisissez votre Email"),
  password: yup.string().required("Mot de passe obligatoire"),
});

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Données du formulaire : ", data);
  };

  return (
    <>
      <div className="relative w-full h-full bg-[#f2f4f7] font-sans">
        {/* <!-- Section gerant la partie de droite --> */}

        {/* <!-- Premiere Section --> */}
        <section className="flex justify-center items-center bg-[#f2f4f7]">
          {/* <!-- Partie Principale --> */}
          <main className="justify-center m-4 p-4">
            {/* <!-- Partie Formulaires comprenant tout type de formulaires  --> */}
            <h1 className="text-blue-500 text-[40px] mt-4 text-center flex justify-center items-center font-semibold w-full">
              <img className="w-[34vh]" src={facebook} alt="logo de facebook" />
            </h1>
            <div
              className="px-4 flex justify-center py-3  w-[396px] items-center border border-[#dddfe2] bg-white rounded-xl mb-20"
              style={{
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="w-full">
                <form
                  role="form"
                  className=" w-full "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <p className=" text-center text-xl py-2 ">
                    Se connecter à facebook
                  </p>
                  {/* <!-- Partie email  --> */}
                  <div className="lg:mb-3">
                    <Input
                      id="input_email"
                      type="text"
                      placeholder="Adresse e-mail ou numéro de tél."
                      statusLabel={false}
                      {...register("email")}
                      errorMessage={errors.email?.message}
                      className={
                        "w-full p-3 my-3 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black rounded-lg"
                      }
                    ></Input>
                  </div>

                  {/* <!-- Partie Password  --> */}
                  <div className="lg:mb-3">
                    <Input
                      id="input_password"
                      type="password"
                      placeholder="Mot de passe"
                      statusLabel={false}
                      {...register("password")}
                      errorMessage={errors.password?.message}
                      className={
                        "w-full p-3 my-3 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black rounded-lg"
                      }
                    ></Input>
                  </div>
                  <div className="pt-2 my-2">
                    <button
                      id="btn-submit-login"
                      className="bg-[#1877f2] text-white rounded-lg w-full text-center text-[20px] shadow-sm px-4 py-3 font-semibold"
                    >
                      Se connecter
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      id="password-forgot"
                      className="text-sm text-[#1877f2]  cursor-pointer focus:text-[#1877f2] hover:underline  pointer mt-2 text-center"
                    >
                      Informations de compte oubliées ?
                    </a>
                  </div>
                </form>
                <div className="flex text-sm flex-col space-y-2">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px mt-2 bg-gray-300 w-1/2"></span>
                    <span className=" font-normal text-gray-400 mt-2">ou</span>
                    <span className="h-px mt-2 bg-gray-300 w-1/2"></span>
                  </span>
                  <div className="pt-2 my-2 text-center lg:mb-3">
                    <p className="mt-2 mb-6">
                      <Link
                        id="btn-go-register"
                        className="px-6 py-[14px] text-[17px] mb-2 font-bold text-white transition-colors duration-300 bg-[#42b72a] rounded-lg shadow cursor-pointer"
                        to={"/auth/register"}
                      >
                        Créer nouveau compte
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
      {/* <!-- Fin de la partie section --> */}

      <Footer></Footer>
    </>
  );
}

export default LoginComponent;
