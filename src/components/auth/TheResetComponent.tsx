// import facebook from "../../assets/facebook-icone.svg";
import Footer from "../utils/FooterComponent";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../utils/input";
import {Button} from "../utils/button";
// import FooterForm from "../utils/footerForm";
import { Auth } from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";
import TheNavbarAuthComponent from "./children/TheNavbarAuth";
import FooterForm from "../utils/footerForm";

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

function ResetComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigate = useNavigate(); // Hook pour la navigation

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Données du formulaire : ", data);
    const response = await Auth.reset(data);
    if (response!.code === 200) {
      // console.log(">>>>>>>>> response data", response!.data);
      await navigate("/auth/validate");
    }
  };
  // const onGoToLogin = async () => {
  //   console.log("j'arrive ici");

  //   // navigate("/auth/login");
  // };

  return (
    <>
      {/* <!-- Premiere Section --> */}
      <TheNavbarAuthComponent></TheNavbarAuthComponent>
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
                <p className="text-xl py-2 ">Trouver votre compte</p>
              </div>
              <form
                role="form"
                className=" w-full "
                onSubmit={handleSubmit(onSubmit)}
              >
                <hr />
                <div className="w-full ">
                  <p className="py-2">
                    S'il vous plait entrer votre email ou numéro de téléphone
                    pour chercher votre compte.
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
                <hr />
                <div className="flex justify-end items-center gap-4">
                  <FooterForm
                    id="btn_reset_cancel"
                    title="Annuler"
                    className="bg-white hover:bg-slate-200 text-black rounded-lg w-full text-center border my-2 shadow-sm px-4 py-1 font-semibold"
                    orElement={false}
                    to={"/auth/login"}
                  ></FooterForm>

                  <Button
                    id="btn_reset_search"
                    type="submit"
                    className="bg-[#1877f2] hover:bg-[#1840f2] text-white rounded-lg w-full text-center my-2 shadow-sm px-4 py-1  font-semibold"
                  >Chercher</Button>
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

export default ResetComponent;
