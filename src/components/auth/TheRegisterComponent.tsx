// import {*} from "react";
import facebook from "../../assets/facebook-icone.svg";
import Footer from "../subComponents/FooterComponent";
import { useForm } from "react-hook-form";

// import * as React from "react";
import Input from "../subComponents/InputComp";
// import { useState } from "react";

function RegisterComponent() {
  // const [formDate, setFormDate] = useState({
  //   jour: "",
  //   mois: "",
  //   annee: "",
  // });

  // const calculateDate = () => {
  //   // Créer la date obtenue
  //   const obtainedDate = new Date(
  //     Number(formDate.annee),
  //     Number(formDate.mois),
  //     Number(formDate.jour)
  //   );

  //   // Obtenir la date actuelle
  //   const today = new Date();

  //   // Calculer la différence d'années
  //   let age = today.getFullYear() - obtainedDate.getFullYear();

  //   // Ajuster si l'anniversaire de cette année n'est pas encore passé
  //   const hasHadBirthdayThisYear =
  //     today.getMonth() > obtainedDate.getMonth() ||
  //     (today.getMonth() === obtainedDate.getMonth() &&
  //       today.getDate() >= obtainedDate.getDate());

  //   if (!hasHadBirthdayThisYear) {
  //     age -= 1;
  //   }

  //   return age >= 18 ? obtainedDate : false;
  // };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      date: "",
      password: "",
      gender: "",
      checkbox_gender: [],
      radio_gender: "",
    },
  });

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="relative w-full h-full bg-[#f2f4f7]">
        {/* <!-- Section gerant la partie de droite --> */}

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
                <form
                  role="form"
                  className="px-4  w-full"
                  onSubmit={handleSubmit(onsubmit)}
                >
                  {/* <!-- Partie Nom complet  --> */}
                  <div className="lg:mb-3 flex items-center justify-center gap-3">
                    <Input
                      classLabel={""}
                      id={"firstName"}
                      type={"text"}
                      name={"firstName"}
                      label={""}
                      placeholder={"Prénom"}
                      statusLabel={false}
                      classInput={
                        "w-full px-6 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                      ref={register}
                    ></Input>
                    <Input
                      id={"lastName"}
                      type={"text"}
                      name={"lastName"}
                      label={""}
                      placeholder={"Nom de famille"}
                      statusLabel={false}
                      classInput={
                        "w-full px-6 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                      classLabel={""}
                      ref={register}
                    ></Input>
                  </div>
                  <div>
                    {/* <!-- Partie Date de naissance  --> */}
                    <label>Date de naissance</label>
                    <div className="lg:mb-3 flex items-center justify-center gap-3">
                      <Input
                        id={"lastName"}
                        type={"select"}
                        name={"lastName"}
                        label={""}
                        placeholder={"Nom de famille"}
                        statusLabel={false}
                        classInput={
                          "w-full px-6 py-1 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                        ref={register}
                        classLabel={""}
                      ></Input>
                      <Input
                        id={"lastName"}
                        type={"select"}
                        name={"lastName"}
                        label={""}
                        placeholder={"Nom de famille"}
                        statusLabel={false}
                        classInput={
                          "w-full px-6 py-1 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                        ref={register}
                        classLabel={""}
                      ></Input>
                      <Input
                        id={"lastName"}
                        type={"select"}
                        name={"lastName"}
                        label={""}
                        placeholder={"Nom de famille"}
                        statusLabel={false}
                        classInput={
                          "w-full px-6 py-1 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                        }
                        ref={register}
                        classLabel={""}
                      ></Input>
                    </div>
                  </div>
                  <div>
                    <label>Genre</label>

                    <div>
                      <ul className=" w-full text-sm font-medium text-gray-900 bg-white   flex justify-center items-center  gap-4">
                        <li
                          className="w-full transition duration-300 border border-gray-300 
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded "
                        >
                          <div className="flex items-center px-2">
                            <Input
                              id={"radio-female"}
                              type={"radio"}
                              name={"radio-female"}
                              label={"Female"}
                              statusLabel={true}
                              classLabel={
                                "w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }
                              classInput={
                                "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 outline-none"
                              }
                              ref={register}
                            ></Input>
                          </div>
                        </li>
                        <li
                          className="w-full transition duration-300 border border-gray-300 
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 roundedborder rounded-md"
                        >
                          <div className="flex items-center justify-between  px-2 ">
                            <Input
                              id={"radio-male"}
                              type={"radio"}
                              name={"radio-male"}
                              label={"Male"}
                              statusLabel={true}
                              classLabel={
                                "w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }
                              classInput={
                                "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 outline-none"
                              }
                              ref={register}
                            ></Input>
                          </div>
                        </li>
                        <li
                          className="w-full border-b transition duration-300 border border-gray-300 
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded  "
                        >
                          <div className="flex items-center  px-2">
                            <Input
                              id={"radio-custom"}
                              type={"radio"}
                              name={"radio-custom"}
                              label={"Custom"}
                              statusLabel={true}
                              classLabel={
                                "w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }
                              classInput={
                                "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 outline-none"
                              }
                              ref={register}
                            ></Input>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Input
                      id={"select-type-gender"}
                      type={"select"}
                      name={"select-type-gender"}
                      statusLabel={false}
                      classInput={
                        "w-full px-6 py-1 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                      ref={register}
                      label={""}
                      classLabel={""}
                    ></Input>

                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis eos praesentium.
                    </p>
                    <Input
                      id={"input_gender"}
                      type={"text"}
                      name={"input_gender"}
                      placeholder={"Gender (optional)"}
                      statusLabel={false}
                      classInput={
                        "w-full px-6 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                      ref={register}
                      label={""}
                      classLabel={""}
                    ></Input>
                  </div>
                  <div className="w-full">
                    <Input
                      id={"input_email"}
                      type={"text"}
                      name={"input_email"}
                      label={""}
                      placeholder={"Mobile number or email"}
                      statusLabel={false}
                      classInput={
                        "w-full px-6 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                      ref={register}
                      classLabel={""}
                    ></Input>
                  </div>
                  <div className="w-full">
                    <Input
                      id={"input_password"}
                      type={"text"}
                      name={"input_password"}
                      label={""}
                      placeholder={"New password"}
                      statusLabel={false}
                      classInput={
                        "w-full px-6 py-2 my-2 transition duration-300 border border-gray-300 outline-none hover:border-blue-500 focus:border-blue-600 rounded"
                      }
                      ref={register}
                      classLabel={""}
                    ></Input>
                  </div>
                  <div className="text-xs">
                    <p className="mb-3">
                      Les personnes qui utilisent notre service ont pu importr
                      vos coordonnées sur Facebook.
                      <a
                        id="password-forgot"
                        className="text-sm text-blue-800 font-semibold cursor-pointer focus:text-blue-800 pointer text-center mx-1"
                      >
                        En savoir plus.
                      </a>
                    </p>
                    <p className="mb-3">
                      En cliquant sur S'incrire. Vous acceptez nos
                      <a className="text-sm text-blue-800 font-semibold cursor-pointer focus:text-blue-800 pointer text-center mx-1">
                        Conditions générales,
                      </a>
                      notre
                      <a className="text-sm text-blue-800 font-semibold cursor-pointer focus:text-blue-800 pointer text-center mx-1">
                        Politique de confidentialité
                      </a>
                      et notre
                      <a className="text-sm text-blue-800 font-semibold cursor-pointer focus:text-blue-800 pointer text-center mx-1">
                        Politique d'utilisation des cookies.
                      </a>
                      Vous recevrez peut-être des notifications par texto de
                      notre part et vous pouvez à tout moment vous désabonner.
                    </p>
                  </div>
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
              </div>
            </div>
          </main>
        </section>

        {/* <!-- Fin de la partie section --> */}

        <Footer></Footer>
      </div>
    </>
  );
}

export default RegisterComponent;
// function useForm(arg0: { defaultValues: { firstName: string; lastName: string; date: string; password: string; gender: string; checkbox_gender: never[]; radio_gender: string; }; }): { register: any; handleSubmit: any; } {
//   throw new Error("Function not implemented.");
// }
