import facebook from "../../assets/facebook-icone.svg";
import Footer from "../utils/FooterComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../utils/input";
import ErrorInput from "../utils/errorInput";
import ButtonElement from "../utils/button";
import FooterForm from "../utils/footerForm";
import { Auth } from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  email: yup
    .string()
    .email(
      "L'e-mail ou le numéro de mobile entré n'est pas associé à un compte. Trouvez votre compte et connectez-vous."
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
      <section className="flex justify-center items-center w-full h-full font-sans bg-[#f2f4f7]">
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
                  <ErrorInput
                    id="input_email"
                    message={errors.email?.message}
                  ></ErrorInput>
                </div>

                {/* <!-- Partie Password  --> */}
                <div className="my-3 ">
                  <Input
                    id="input_password"
                    type="password"
                    placeholder="Mot de passe"
                    {...register("password")}
                    errorMessage={errors.password?.message}
                    className={
                      "w-full p-3 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                    }
                  ></Input>
                  <ErrorInput
                    id="input_password"
                    message={errors.password?.message}
                  ></ErrorInput>
                </div>

                <ButtonElement
                  id="btn_submit_login"
                  title="Se connecter"
                  type="submit"
                  className="bg-[#1877f2] text-white rounded-lg w-full text-center text-[20px] shadow-sm px-4 py-3 font-semibold"
                ></ButtonElement>

                <FooterForm
                  id="password-forgot"
                  title="Informations de compte oubliées ?"
                  className="text-sm text-[#1877f2]  cursor-pointer focus:text-[#1877f2] hover:underline  pointer mt-2 text-center"
                  orElement={false}
                  to={"/auth/reset"}
                ></FooterForm>
              </form>
              <FooterForm
                id="btn-go-register"
                title="Créer nouveau compte"
                className="px-6 py-[14px] text-[17px] mb-2 font-bold text-white transition-colors duration-300 bg-[#42b72a] rounded-lg shadow cursor-pointer"
                orElement={true}
                to={"/auth/register"}
              ></FooterForm>
            </div>
          </div>
        </main>
      </section>

      <Footer></Footer>
    </>
  );
}

export default LoginComponent;
