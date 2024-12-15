import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";

import facebook from "../../assets/facebook-icone.svg";
import Footer from "../subComponents/FooterComponent";
import Input from "../subComponents/InputComp";
import Politique from "../subComponents/ThePolitiqueComponent";

// Étape 1 : Définir les types des données
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  gender_custom_select: string;
  gender_custom: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };
}

// Étape 2 : Définir les règles de validation
const schema = yup.object({
  firstName: yup.string().required("Saisissez votre prénom"),
  lastName: yup.string().required("Saisissez votre nom de famille"),
  email: yup
    .string()
    .email("Saisissez un email correct")
    .required("Saisissez votre Email"),
  password: yup
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .matches(/[A-Z]/, "Le mot de passe doit contenir une majuscule")
    .matches(/[0-9]/, "Le mot de passe doit contenir un chiffre")
    .required("Mot de passe obligatoire"),
  gender: yup.string().required("Veuillez sélectionner votre genre"),
  birthday: yup.object({
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Données du formulaire : ", data);
  };

  return (
    <>
      <div className="relative w-full h-full bg-[#f2f4f7]">
        {/* <!-- Premiere Section --> */}
        <section className="flex justify-center items-center bg-[#f2f4f7]">
          {/* <!-- Partie Principale --> */}
          <main className="justify-center mx-4 mb-4 p-4">
            {/* <!-- Partie Formulaires comprenant tout type de formulaires  --> */}
            <h1 className="text-blue-500 text-center flex justify-center items-center font-semibold w-full">
              <img className="w-[50vh]" src={facebook} alt="logo de facebook" />
            </h1>
            <div
              className="flex justify-center py-4  w-[432px] items-center border border-[#dddfe2] bg-white rounded-md "
              style={{
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>
                <div>
                  <p className=" text-center text-2xl font-bold">
                    Créer un compte
                  </p>
                  <p className="text-center">C'est simple et rapide.</p>
                </div>
                <hr className="my-2" />

                {/* Fourmulaire d'inscription de facebook */}
                <form
                  role="form"
                  className="px-4  w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* <!-- Partie Nom complet  --> */}
                  <div className="lg:mb-3 flex items-center justify-center gap-3">
                    <Input
                      id="input_firstName"
                      type="text"
                      placeholder="Prénom"
                      statusLabel={false}
                      {...register("firstName")}
                      errorMessage={errors.firstName?.message}
                      className={
                        "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                    ></Input>
                    <Input
                      id="input_lastName"
                      type="text"
                      placeholder="Nom de famille"
                      statusLabel={false}
                      {...register("lastName")}
                      errorMessage={errors.lastName?.message}
                      className={
                        "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                    ></Input>
                  </div>

                  {/* <!-- Partie Date de naissance  --> */}
                  <div>
                    <label>Date de naissance</label>
                    <div className="lg:mb-3 flex items-center justify-center gap-3">
                      <Input
                        id="input_date_day"
                        type="select"
                        {...register("birthday.day")}
                        options={[...Array(31)].map((_, i) => ({
                          label: String(i + 1),
                          value: i + 1,
                        }))}
                        errorMessage={errors.birthday?.day?.message}
                        statusLabel={false}
                        className={
                          "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                      ></Input>
                      <Input
                        id="input_date_month"
                        type="select"
                        {...register("birthday.month")}
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
                          // Ajouter les autres mois
                        ]}
                        errorMessage={errors.birthday?.month?.message}
                        statusLabel={false}
                        className={
                          "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                      ></Input>
                      <Input
                        id="input_date_year"
                        type="select"
                        {...register("birthday.year")}
                        options={Array.from({ length: 100 }, (_, i) => {
                          const year = new Date().getFullYear() - i;
                          return { label: String(year), value: year };
                        })}
                        errorMessage={errors.birthday?.day?.message}
                        statusLabel={false}
                        className={
                          "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                      ></Input>
                    </div>
                  </div>

                  {/* <!-- Partie Genre  --> */}
                  <div>
                    <label>Genre</label>
                    <Input
                      id="input_gender"
                      label="Genre"
                      className="w-4 h-4 text-blue-600 is-invalid bg-gray-100 border-gray-300 focus:ring-blue-500 outline-none"
                      type="radio"
                      {...register("gender")}
                      onChange={handleGenderChange}
                      options={[
                        { label: "Homme", value: "male" },
                        { label: "Femme", value: "female" },
                        { label: "Personnalisé", value: "custom" },
                      ]}
                      errorMessage={errors.gender?.message}
                    />
                    {errors.gender?.message && (
                      <div className="invalid-feedback text-red-600 text-xs">
                        {errors.gender?.message}
                      </div>
                    )}
                  </div>

                  {showCustomGender && (
                    <div>
                      <Input
                        id="select_type_gender"
                        statusLabel={false}
                        className={
                          "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                        type="select"
                        {...register("gender_custom_select")}
                        options={[
                          {
                            label: "She : which her a happy birthday!",
                            value: "she",
                          },
                          {
                            label: "He : which him a happy birthday!",
                            value: "he",
                          },
                          {
                            label: "They: which them a happy birthday!",
                            value: "they",
                          },
                        ]}
                      ></Input>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis eos praesentium.
                      </p>

                      <div className="lg:mb-3">
                        <Input
                          id="input_gender_custom"
                          type="text"
                          placeholder="gender (custom)"
                          statusLabel={false}
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
                  <div className="lg:mb-3">
                    <Input
                      id="input_email"
                      type="text"
                      placeholder="numero mobile ou email"
                      statusLabel={false}
                      {...register("email")}
                      errorMessage={errors.email?.message}
                      className={
                        "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                    ></Input>
                  </div>
                  {/* <!-- Partie Password  --> */}
                  <div className="lg:mb-3">
                    <Input
                      id="input_password"
                      type="password"
                      placeholder="password"
                      statusLabel={false}
                      {...register("password")}
                      errorMessage={errors.password?.message}
                      className={
                        "w-full px-3 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                    ></Input>
                  </div>
                  {/* <!-- Partie Politique  --> */}
                  <Politique></Politique>
                  {/* <!-- Partie Bouton inscription et autres  --> */}
                  <div className="pt-2 my-2 flex justify-center">
                    <button
                      id="btn-submit"
                      type="submit"
                      className="bg-[#00a400] text-white rounded px-12 text-center shadow-sm py-1 font-semibold"
                    >
                      S'inscrire
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      id="password-forgot"
                      className=" text-[#1877f2] font-semibold cursor-pointer focus:text-blue-800 pointer mt-2 text-center"
                    >
                      Vous avez déjà un compte ?
                    </a>
                  </div>
                </form>
                {/* <!-- Partie cloture formulaire  --> */}
              </div>
            </div>
          </main>
        </section>
        {/* <!-- Partie Pied de page  --> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default RegisterComponent;
