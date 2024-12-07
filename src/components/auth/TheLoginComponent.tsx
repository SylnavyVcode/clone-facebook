import React from "react";
import facebook from "../../assets/facebook-icone.svg";
import Footer from "../subComponents/FooterComponent";

function LoginComponent() {
  const [show, setShow] = React.useState(false);
  console.log(setShow(true));

  return (
    <>
      <div className="relative w-full h-full bg-[#f2f4f7]">
        {/* <!-- Section gerant la partie de droite --> */}

        {/* <!-- Premiere Section --> */}
        <section className="flex justify-center items-center bg-[#f2f4f7]">
          {/* <!-- Partie Principale --> */}
          <main className="justify-center m-4 p-4">
            {/* <!-- Partie Formulaires comprenant tout type de formulaires  --> */}
            <h1 className="text-blue-500 text-[40px] text-center flex justify-center items-center font-semibold w-full">
              <img className="w-[36vh]" src={facebook} alt="logo de facebook" />
            </h1>
            <div
              className="px-4 flex justify-center py-4  w-[395px] items-center border border-[#dddfe2] bg-white rounded-md "
              style={{
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <form role="form" className=" w-full">
                <p className=" text-center text-2xl">se connecter à facebook</p>
                <div className="lg:mb-3">
                  {/* <!-- Partie Email  --> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="email"
                    v-model="formModel.email"
                    placeholder="Numéro mobile ou e-mail"
                    className="
                   w-full px-6 py-2 my-2 transition duration-300 border border-gray-300 
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded
                "
                  />
                  {show && (
                    <p
                      className="flex text-red-600 font-open-sans font-semibold text-xs"
                      id="msgErrorEmail"
                      v-if="formBuiler.errorEmail"
                    >
                      <img
                        alt="warning-image"
                        className="pr-1 w-4"
                        src="../../assets/images/login/warning.svg"
                      />
                      email error
                    </p>
                  )}
                </div>

                <div
                  className="
                  relative w-full px-6 py-2 my-2 transition duration-300 border border-gray-300  outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded flex
               "
                >
                  {/* <!-- Partie Password --> */}

                  <input
                    id="password"
                    name="password"
                    v-model="formModel.password"
                    aria-label="password"
                    placeholder="Saisissez votre mot de passe"
                    className="border-none py-2 px-1 w-[90%] outline-none"
                  />
                  <span
                    id="password-eye"
                    className="flex items-center justify-center w-[10%]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      width="22"
                      height="16"
                      className="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  </span>
                  {show && (
                    <p
                      v-if="formBuiler.errorPassword"
                      className="flex text-red-600 font-open-sans font-semibold text-xs"
                      id="msgErrorPassword"
                    >
                      <img
                        alt="warning-image"
                        className="pr-1 w-4"
                        src="../../assets/images/login/warning.svg"
                      />
                      password error
                    </p>
                  )}
                </div>
                <div className="pt-2 my-2">
                  <button
                    id="btn-submit"
                    className="bg-blue-600 text-white rounded w-full text-center text-xl shadow-sm px-4 py-2 font-semibold"
                  >
                    Se connecter
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    id="password-forgot"
                    className="text-sm text-blue-800 font-bold cursor-pointer focus:text-blue-800 pointer mt-2 text-center"
                  >
                    Information de compte oubliées ?
                  </a>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-1/2"></span>
                    <span className="font-normal text-gray-500">ou</span>
                    <span className="h-px bg-gray-400 w-1/2"></span>
                  </span>
                  <div className="pt-2 my-2 lg:mb-3">
                    <button
                      id="btn-submit"
                      className="w-full px-4 py-2 text-base font-bold text-white transition-colors duration-300 bg-green-600 rounded shadow"
                    >
                      Créer nouveau compte
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </section>

        {/* <!-- Fin de la partie section --> */}

        <Footer></Footer>
      </div>
    </>
  );
}

export default LoginComponent;
