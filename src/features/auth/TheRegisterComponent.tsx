import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import * as yup from "yup";

import facebook from "../../assets/facebook-icone.svg";

import { Auth } from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";
import HeaderRegister from "../../components/utils/headerRegister";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/utils/FooterComponent";
import FooterForm from "../../components/utils/footerForm";
import InputRadio from "../../components/utils/InputRadio";
import InputSelect from "../../components/utils/InputSelect";
import Politique from "../../components/utils/ThePolitiqueComponent";
import Input from "../../components/ui/Input";

// Étape 1 : Définir les types des données
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  gender: string;
  gender_custom_select?: string;
  gender_custom?: string;
  anniversaire: {
    day: number;
    month: number;
    year: number;
  };
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  firstname: yup.string().required("Saisissez votre prénom"),
  lastname: yup.string().required("Saisissez votre nom de famille"),
  email: yup
    .string()
    .email("Saisissez un email correct")
    .required("Saisissez votre Email"),
  password: yup
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
    .max(16, "Le mot de passe doit contenir au plus 16 caractères.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial."
    )
    .matches(/[A-Z]/, "Le mot de passe doit contenir une majuscule")
    .matches(/[0-9]/, "Le mot de passe doit contenir un chiffre")
    .required("Mot de passe obligatoire"),
  gender: yup.string().required("Veuillez sélectionner votre genre"),
  anniversaire: yup.object({
    day: yup.number().min(1).max(31).required("Jour obligatoire"),
    month: yup.number().min(0).max(11).required("Mois obligatoire"),
    year: yup
      .number()
      .min(1925)
      .max(new Date().getFullYear())
      .required("Année obligatoire"),
  }),
});

function RegisterComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const [showCustomGender, setShowCustomGender] = useState(false);

  // Fonction pour gérer les changements du champ gender
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setShowCustomGender(value === "custom");
  };
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const date =
      data.anniversaire.day.toString() +
      "-" +
      (data.anniversaire.month + 1).toString() +
      "-" +
      data.anniversaire.year.toString();

    const dataSend = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      telephone: "064716613",
      genre: data.gender,
      anniversaire: date.toString(),
      profilePic: "",
      profilCoverPic: "",
      password: data.password,
    };

    const register = await Auth.createAccount(dataSend);
    if (register && register.access_token) {
      localStorage.setItem("token", register.access_token);
      localStorage.setItem("from", "");
      navigate("/auth/login");
    }
  };

  return (
    <>
      <section className="flex justify-center items-center bg-[#f2f4f7]">
        <main className="m-auto  mx-4 mb-4 p-4">
          <h1 className="text-blue-500 text-center flex justify-center items-center font-semibold w-full mb-4">
            <img className="w-[34vh]" src={facebook} alt="logo de facebook" />
          </h1>
          <div
            className="flex-col justify-center py-4 mb-12 w-[435px] items-center border border-[#dddfe2] bg-white rounded-lg "
            style={{
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <HeaderRegister></HeaderRegister>

            {/* Fourmulaire d'inscription de facebook */}
            <form
              role="form"
              className="px-4 text-[15px] text-gray-600 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* <!-- Partie Nom complet  --> */}
              <div className=" flex items-start justify-between gap-3 w-full my-3">
                <div className="w-full">
                  <Input
                    id="input_firstname"
                    placeholder="Prénom"
                    {...register("firstname")}
                    errorMessage={errors.firstname?.message}
                    className={
                      "w-full p-2  transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded"
                    }
                  ></Input>
                </div>
                <div className="w-full">
                  <Input
                    id="input_lastname"
                    placeholder="Nom de famille"
                    {...register("lastname")}
                    errorMessage={errors.lastname?.message}
                    className={
                      "w-full p-2  transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded"
                    }
                  ></Input>
                </div>
              </div>

              {/* <!-- Partie Date de naissance  --> */}
              <div className="mb-2">
                <label className="text-sm">Date de naissance</label>
                <div className=" flex items-center justify-center gap-3">
                  <InputSelect
                    id="input_date_day"
                    {...register("anniversaire.day")}
                    options={[...Array(31)].map((_, i) => ({
                      label: String(i + 1),
                      value: i + 1,
                    }))}
                    errorMessage={errors.anniversaire?.day?.message}
                    className={
                      "w-full px-2 py-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                    }
                  ></InputSelect>
                  <InputSelect
                    id="input_date_month"
                    {...register("anniversaire.month")}
                    options={[
                      { label: "Janvier", value: 0 },
                      { label: "Février", value: 1 },
                      { label: "Mars", value: 2 },
                      { label: "Avril", value: 3 },
                      { label: "Mai", value: 4 },
                      { label: "Juin", value: 5 },
                      { label: "Juillet", value: 6 },
                      { label: "Août", value: 7 },
                      { label: "Septembre", value: 8 },
                      { label: "Octobre", value: 9 },
                      { label: "Novembre", value: 10 },
                      { label: "Décembre", value: 11 },
                    ]}
                    errorMessage={errors.anniversaire?.month?.message}
                    className={
                      "w-full px-2 py-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                    }
                  ></InputSelect>
                  <InputSelect
                    id="input_date_year"
                    {...register("anniversaire.year")}
                    options={Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return { label: String(year), value: year };
                    })}
                    errorMessage={errors.anniversaire?.day?.message}
                    className={
                      "w-full px-2 py-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                    }
                  ></InputSelect>
                </div>
              </div>

              {/* <!-- Partie Genre  --> */}
              <div className="mb-2">
                <label className="text-sm">Genre</label>
                <InputRadio
                  id="input_gender"
                  className="w-4 h-4 me-2 text-blue-600 is-invalid bg-gray-100 border-gray-300 focus:ring-blue-500 outline-none"
                  {...register("gender")}
                  onChange={handleGenderChange}
                  options={[
                    { label: "Femme", value: "female" },
                    { label: "Homme", value: "male" },
                    { label: "Personnalisé", value: "custom" },
                  ]}
                  errorMessage={errors.gender?.message}
                ></InputRadio>
              </div>

              {showCustomGender && (
                <div className="mb-2">
                  <InputSelect
                    id="select_type_gender"
                    className={
                      "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                    }
                    {...register("gender_custom_select")}
                    errorMessage={errors.gender_custom_select?.message}
                    options={[
                      {
                        label: "She : which her a happy anniversaire!",
                        value: "she",
                      },
                      {
                        label: "He : which him a happy anniversaire!",
                        value: "he",
                      },
                      {
                        label: "They: which them a happy anniversaire!",
                        value: "they",
                      },
                    ]}
                  ></InputSelect>

                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eos praesentium.
                  </p>

                  <div className="">
                    <Input
                      id="input_gender_custom"
                      placeholder="gender (custom)"
                      {...register("gender_custom")}
                      errorMessage={errors.gender_custom?.message}
                      className={
                        "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                    ></Input>
                  </div>
                </div>
              )}

              {/* <!-- Partie email  --> */}
              <div className="mt-3">
                <Input
                  id="input_email"
                  placeholder="numero mobile ou email"
                  {...register("email")}
                  errorMessage={errors.email?.message}
                  className={
                    "w-full p-2 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded"
                  }
                ></Input>
              </div>
              {/* <!-- Partie Password  --> */}
              <div className="mb-6 mt-2">
                <Input
                  id="input_password"
                  type="password"
                  placeholder="password"
                  {...register("password")}
                  errorMessage={errors.password?.message}
                  className={
                    "w-full p-2 transition text-[17px] duration-300  outline-none border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded"
                  }
                ></Input>
              </div>

              {/* <!-- Partie Politique  --> */}
              <Politique></Politique>
              <div className="w-full flex justify-center items-center">
                <Button
                  id="btn_submit_register"
                  type="submit"
                  className="px-24 py-2 text-[20px] font-bold text-white transition-colors duration-300 bg-[#00a400] rounded-lg shadow"
                >
                  S'inscrire
                </Button>
              </div>

              <FooterForm
                id="btn-go-login"
                title="Vous avez déjà un compte ?"
                className="text-sm text-[#1877f2]  cursor-pointer focus:text-[#1877f2] hover:underline  pointer mt-2 text-center"
                orElement={false}
                to={"/auth/login"}
              ></FooterForm>
            </form>
            {/* <!-- Partie cloture formulaire  --> */}
          </div>
        </main>
      </section>

      {/* <!-- Partie Pied de page  --> */}
      <Footer></Footer>
    </>
  );
}

export default RegisterComponent;
