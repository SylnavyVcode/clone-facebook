import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
// import FooterForm from "../utils/footerForm";
import { Auth } from "../../services/auth/auth";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/utils/FooterComponent";
import FooterForm from "../../components/utils/footerForm";
import { useNavigate } from "react-router";
import TheNavbarAuthComponent from "./children/TheNavbarLogin";
import Input from "../../components/ui/Input";

interface FormData {
  token: string;
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  token: yup
    .string()
    .length(6, "le code doit contenir 6 caractères.")
    .required("Vous devez entrer un code."),
});

function ValidateComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData | any>({ resolver: yupResolver(schema) });
  const navigate = useNavigate(); // Hook pour la navigation

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    console.log("Données du formulaire : ", data);
    const response = await Auth.validateReset(data);
    console.log(">>>>>>>>>", response);
    if (response && response.code == 200) {
      console.log(">>>>>>>>>", response);
      navigate("/auth/reset-password");
    }
  };

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
                <p className="text-xl py-2 ">
                  Réinitialiser votre mot de passe
                </p>
              </div>
              <form
                role="form"
                className=" w-full text-sm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <hr />
                <div id="reset_password_step_1">
                  <p className="py-2">
                    S'il vous plait vérifier votre email pour confirmer votre
                    code. Votre code est long de 6 nombres.
                  </p>
                  <div className="w-full flex justify-between items-center gap-4">
                    {/* <!-- Partie email  --> */}
                    <div className="my-3">
                      <Input
                        id="input_code"
                        type="text"
                        placeholder="Entrer votre token."
                        {...register("token")}
                        className={
                          "w-full p-3 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                        }
                      ></Input>
                    </div>
                    <div className="flex-col justify-center items-center text-center">
                      <div>Nous avons envoyé votre code à : </div>
                      <div>valmymabika@gmail.com</div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <div>Vous navez pas obtenu un code?</div>
                  <div className="flex justify-end items-center gap-4">
                    <FooterForm
                      id="btn_reset_password_not"
                      title="Not you?"
                      className="bg-white hover:bg-slate-200 text-black rounded-lg w-full text-center border my-2 shadow-sm px-4 py-1 font-semibold"
                      orElement={false}
                      to={"/auth/login"}
                    ></FooterForm>

                    <Button
                      id="btn_reset_password_continue"
                      type="submit"
                      className="bg-[#1877f2] hover:bg-[#1840f2] text-white rounded-lg w-full text-center my-2 shadow-sm px-4 py-1  font-semibold"
                    >
                      Continuer
                    </Button>
                  </div>
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

export default ValidateComponent;
