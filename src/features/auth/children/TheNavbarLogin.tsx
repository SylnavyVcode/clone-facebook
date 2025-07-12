import facebook from "../../../assets/facebook-icone.svg";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { Auth } from "../../../services/auth/auth";
// import Input from "../../../components/utils/input";
import { Button } from "../../../components/ui/Button";
import FooterForm from "../../../components/utils/footerForm";
import Input from "../../../components/ui/Input";

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

function TheNavbarAuthComponent() {
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
              <form
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
                <div className=" flex justify-center items-center m-auto gap-x-2 mx-2">
                  {/* <!-- Partie email  --> */}

                  <Input
                    id="input_email"
                    type="text"
                    placeholder="Adresse e-mail ou numéro de tél."
                    {...register("email")}
                    errorMessage={errors.email?.message}
                    className={
                      "w-full px-3 py-2 transition  duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                    }
                  ></Input>

                  {/* <!-- Partie Password  --> */}

                  <Input
                    id="input_password"
                    type="password"
                    placeholder="Mot de passe"
                    {...register("password")}
                    errorMessage={errors.password?.message}
                    className={
                      "w-full px-3 py-2 transition  duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                    }
                  ></Input>

                  <Button
                    id="btn_navbar_login"
                    type="submit"
                    className="bg-[#1877f2] text-white rounded-md w-max-[200px] text-center  shadow-sm px-4 py-2 font-semibold"
                  >
                    Se connecter
                  </Button>

                  <Button
                    id="password_navbar_forgot"
                    className="text-sm text-[#1877f2]  cursor-pointer focus:text-[#1877f2] hover:underline  pointer mt-2 text-center"
                  >
                    <a href="/auth/login">Informations de compte oubliées ?</a>
                  </Button>

                  {/* <FooterForm
                    id="password_navbar_forgot"
                    title="Informations de compte oubliées ?"
                    className="text-sm text-[#1877f2]  cursor-pointer focus:text-[#1877f2] hover:underline  pointer mt-2 text-center"
                    orElement={false}
                    to={"/auth/login"}
                  ></FooterForm> */}
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default TheNavbarAuthComponent;
