<template>
  <!-- Structure de la page web  -->
  <div
    class="w-full h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
    v-if="!isTextLoaded"
  >
    <!-- Section gerant la partie de gauche [ IMAGE DE FOND GAUCHE ]-->
    <div
      class="h-screen w-full justify-center items-center hidden md:flex"
      style="background-color: #082471"
    >
      <img
        class="w-[450px]"
        alt="IMAGE_CODE"
        src="../../assets/images/Register/login_1.png"
      />
    </div>
    <!-- Section gerant la partie de droite -->
    <div class="h-screen w-full">
      <!-- Premiere Section -->
      <section>
        <!-- Partie Principale -->
        <main class="justify-center">
          <!-- Partie entete comprenant le logo-->

          <header class="flex-1 items-center header">
            <h1 class="cursor-pointer flex text-3xl font-semibold items-center">
              <a
                @click="$router.push('/auth/login')"
                id="logo_facebook"
                class="cursor-pointer"
              >
                <img
                  src="../../assets/images/Register/facebook_transparent_file.png"
                  alt="ayokai-logo"
                  class="ml-4 inline"
                  width="200"
                />
              </a>
            </h1>
            <div class="select-wrapper select dropdown">
              <img :src="flagUrl" class="flag-icon" alt="image" />

              <select
                id="lang"
                v-model="selectedLanguage"
                @change="getTranslations"
              >
                <option value="fr-FR">
                  {{ text.authentification?.langue.FR }}
                </option>
                <option value="en-EN">
                  {{ text.authentification?.langue.EN }}
                </option>
              </select>
            </div>
          </header>

          <!-- Partie Formulaires comprenant tout type de formulaires  -->
          <div
            class="px-10 flex justify-center mt-4 w-full items-center h-[calc(100vh-180px)]"
          >
            <form role="form" class="lg:w-[500px]">
              <div class="mb-6">
                <h2
                  class="text-3xl font-semibold text-black border-b pb-2 opacity-75"
                >
                  {{ text.authentification?.changePassword.title }}
                </h2>
              </div>
              <div class="relative mb-8 lg:mb-6">
                <!-- Partie Password -->
                <label
                  for="password"
                  class="text-lg font-semibold text-black opacity-75"
                  >{{
                    text.authentification?.changePassword.newPassword
                  }}</label
                ><br />
                <input
                  :type="type"
                  id="password"
                  name="password"
                  v-model="formModel.password"
                  aria-label="password"
                  @input="checKPassword"
                  :placeholder="
                    text.authentification?.changePassword.newPasswordPlaceholder
                  "
                  :class="{
                    'w-full px-4 py-2 my-2 transition duration-300 border border-red-600 outline-red-600':
                      formBuiler.errorPassword,
                    'w-full px-4 py-2 my-2 transition duration-300 border border-gray-300 rounded ':
                      !formBuiler.errorPassword,
                  }"
                />
                <span
                  @click="toogleType"
                  id="password-eye"
                  toggle="#password-ico"
                  class="absolute right-[6px] top-[49px] w-[25px] h-[20px] bg-no-repeat cursor-pointer z-10"
                >
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                      fill="#082471"
                    />
                  </svg>
                </span>
                <p
                  v-if="formBuiler.errorPassword"
                  class="flex text-red-600 font-open-sans font-semibold text-xs"
                  id="msgErrorPassword"
                >
                  <img
                    alt="warning-image"
                    class="w-4 pr-1"
                    src="../../assets/images/login/warning.svg"
                  />
                  {{ text.authentification?.changePassword.newPasswordError }}
                </p>
                <ul class="text-xs ml-6" v-if="formBuiler.errorPassword">
                  <li
                    :class="[
                      formBuiler.errorLength
                        ? 'text-red-600'
                        : 'text-green-600',
                    ]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="pr-1 w-4 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {{ text.authentification?.register.passwordError.belength }}
                  </li>
                  <li
                    :class="[
                      formBuiler.errorMaj ? 'text-red-600' : 'text-green-600',
                    ]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="pr-1 w-4 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {{
                      text.authentification?.register.passwordError.beUppercase
                    }}
                  </li>
                  <li
                    :class="[
                      formBuiler.errorMin ? 'text-red-600' : 'text-green-600',
                    ]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="pr-1 w-4 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {{
                      text.authentification?.register.passwordError.beLowerrcase
                    }}
                  </li>
                  <li
                    :class="[
                      formBuiler.errorSpecial
                        ? 'text-red-600'
                        : 'text-green-600',
                    ]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="pr-1 w-4 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {{
                      text.authentification?.register.passwordError
                        .beSpecialChar
                    }}
                  </li>
                  <li
                    :class="[
                      formBuiler.errorNumber
                        ? 'text-red-600'
                        : 'text-green-600',
                    ]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="pr-1 w-4 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {{ text.authentification?.register.passwordError.beNumber }}
                  </li>
                </ul>
              </div>
              <div class="relative lg:mb-6">
                <!-- Partie Password -->
                <label
                  for="password"
                  class="text-lg font-semibold text-black opacity-75"
                  >{{ text.authentification?.changePassword.confirm }}</label
                ><br />
                <input
                  :type="typeConfirm"
                  id="password"
                  name="password"
                  v-model="formModel.confirmpassword"
                  aria-label="password"
                  :placeholder="
                    text.authentification?.changePassword.confirmPlaceholder
                  "
                  :class="{
                    'w-full px-4 py-2 my-2 transition duration-300 border border-red-600 ':
                      formBuiler.errorConfirmPassword,
                    'w-full px-4 py-2 my-2 transition duration-300 border border-gray-300 rounded ':
                      !formBuiler.errorConfirmPassword,
                  }"
                />
                <span
                  @click="toogleTypeConfirm()"
                  id="Confirmpassword-eye"
                  toggle="#password-ico"
                  class="absolute right-[6px] top-[49px] w-[25px] h-[20px] bg-no-repeat cursor-pointer z-10"
                >
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                      fill="#082471"
                    />
                  </svg>
                </span>
                <p
                  v-if="formBuiler.errorConfirmPassword"
                  class="flex text-red-600 font-open-sans font-semibold text-xs"
                  id="msgErrorPassword"
                >
                  <img
                    alt="warning-image"
                    class="w-4 pr-1"
                    src="../../assets/images/login/warning.svg"
                  />
                  {{ text.authentification?.changePassword.confirmError }}
                </p>
              </div>

              <div class="pt-2 my-2 lg:mb-6">
                <button
                  id="btn-submit"
                  type="button"
                  @click="validateOtpEmail()"
                  class="w-full px-4 py-2 text-base font-bold text-white transition-colors duration-300 bg-black rounded-md shadow hover:bg-btn-blue-hover"
                >
                  <TheLoader v-if="isLoading"></TheLoader>
                  {{ text.authentification?.changePassword.validate }}
                </button>
              </div>
            </form>

            <!-- Lignes contenant se souvenir de moi et le mot de passe oublier -->
          </div>
        </main>
        <!-- Fin de la partie Principale -->
      </section>
      <!-- Fin de la partie section -->
    </div>
    <!-- Fin de la partie gerant la section de droite -->

    <!-- ========== Start Alert ========== -->
    <div class="font-poppins fixed flex flex-col items-end right-5 bottom-8">
      <!-- real google button -->

      <!-- real google button end -->
      <div
        v-if="error"
        class="drop-shadow-xl max-w-lg relative flex bg-white p-3 rounded-md border-l-6 border-red-700 m-2"
      >
        <img
          src="../../assets/images/login/error.svg"
          alt="success-icon"
          class="w-6 h-6"
        />
        <div class="flex-auto pl-4">
          <p class="font-semibold">
            <b>{{ text.authentification?.changePassword.errorPopup.title }}</b>
          </p>
          <p class="text-sm pt-1 pr-10">
            {{ text.authentification?.changePassword.errorPopup.body }}
          </p>
        </div>
        <img
          alt="close-icon"
          id="btn-close1"
          class="absolute top-3 right-3 cursor-pointer"
          src="../../assets/images/login/close.svg"
        />
      </div>
    </div>
    <!-- ========== End Alert ========== -->
  </div>
  <TheLoaderMain v-if="isTextLoaded"></TheLoaderMain>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/* import { useI18n } from "vue-i18n"; */

/* import scriptLangVue from "../../locales/scriptLang.vue"; */
import { Authentification } from "../../services/auth/auth";
// import { Validation } from "../../services/lib/validation";

import TheLoader from "../loader/TheLoader.vue";
import { Translator } from "../../services/lib/translator";
import { RegisterForm } from "../../formBuilder/auth/RegisterForm";
import TheLoaderMain from "../loader/Loadertrans.vue";

interface SigninBuilder {
  errorPassword: boolean;
  errorConfirmPassword: boolean;
  errorMaj: boolean;
  errorMin: boolean;
  errorNumber: boolean;
  errorSpecial: boolean;
  errorLength: boolean;
}

export default defineComponent({
  components: { /* scriptLangVue, */ TheLoader, TheLoaderMain },
  data() {
    return {
      isTextLoaded: true,
      text: {} as any,
      error: false,
      formModel: {
        confirmpassword: "",
        password: "",
        errorMaj: false,
        errorMin: false,
        errorNumber: false,
        errorSpecial: false,
        errorLength: false,
      },
      token: "" as string,
      showpassword: false,
      type: "password",
      typeConfirm: "password",
      msgError: "",
      formBuiler: {} as SigninBuilder,
      authService: new Authentification(),
      isLoading: false,
      errorToken: false,
      selectedLanguage: "en-EN",
      flagUrl: "https://cdn.weglot.com/flags/circle/gb.svg",
      langueLocal: "" as string,
    };
  },

  async mounted() {
    let defaultLang = localStorage.getItem("lang");

    if (defaultLang != null) {
      this.selectedLanguage = defaultLang;
    }

    localStorage.setItem("lang", this.selectedLanguage);
    this.text = await Translator.getLoginLangTranslate(this.selectedLanguage);

    this.flagUrl =
      this.selectedLanguage === "fr-FR"
        ? "https://cdn.weglot.com/flags/circle/fr.svg"
        : "https://cdn.weglot.com/flags/circle/gb.svg";

    this.isTextLoaded = false;
  },

  methods: {
    async getTranslations() {
      this.flagUrl =
        this.selectedLanguage === "fr-FR"
          ? "https://cdn.weglot.com/flags/circle/fr.svg"
          : "https://cdn.weglot.com/flags/circle/gb.svg";
      localStorage.setItem("lang", this.selectedLanguage);
      const langLocal = localStorage.getItem("lang") || "fr-FR";
      this.langueLocal = langLocal;
      try {
        this.text = await Translator.getLoginLangTranslate(this.langueLocal);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    },

    checKPassword() {
      let passwordBuilder = new RegisterForm()
        .setLengtH(this.formModel.password)
        .setMaj(this.formModel.password)
        .setMin(this.formModel.password)
        .setNumber(this.formModel.password)
        .setSpecial(this.formModel.password)
        .setPassword(this.formModel.password)
        .builderRegisterForm();
      this.formBuiler.errorPassword = passwordBuilder.errorPassword;
      this.formBuiler.errorLength = passwordBuilder.errorLength;
      this.formBuiler.errorMaj = passwordBuilder.errorMaj;
      this.formBuiler.errorMin = passwordBuilder.errorMin;
      this.formBuiler.errorNumber = passwordBuilder.errorNumber;
      this.formBuiler.errorSpecial = passwordBuilder.errorSpecial;
    },

    toogleType() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    toogleTypeConfirm() {
      if (this.typeConfirm === "password") {
        this.typeConfirm = "text";
      } else {
        this.typeConfirm = "password";
      }
    },

    async validateOtpEmail() {
      try {
        this.formBuiler = new RegisterForm()
          .setPassword(this.formModel.password)
          .setConfirmPassword(this.formModel.confirmpassword)
          .setLengtH(this.formModel.password)
          .setMaj(this.formModel.password)
          .setMin(this.formModel.password)
          .setNumber(this.formModel.password)
          .setSpecial(this.formModel.password)
          .builderRegisterForm();

        if (
          !this.formBuiler.errorPassword &&
          !this.formBuiler.errorConfirmPassword
        ) {
          this.error = false;

          this.isLoading = true;

          let req = new Authentification();

          const id: any = localStorage.getItem("__temp__");

          let resp = await req.validateEmailResset(id, this.formModel.password);

          if (resp.code == 201) {
            this.msgError = "";
            localStorage.setItem("token", resp.access_token);

            const datas = await Authentification.getUserDatas(
              resp.access_token
            );

            if (datas.account.entreprise[0].libelle != "") {
              this.$router.push({
                name: "employe",
                params: {
                  country: datas.account.entreprise[0].country,
                  entreprise: datas.account.entreprise[0].libelle.trim(),
                },
              });
            } else {
              this.$router.push({ name: "create-entreprise" });
            }

            localStorage.removeItem("__temp__");
          } else {
            this.msgError = "La récuperation de compte à échouer ";
            this.isLoading = false;

            setTimeout(() => {
              this.msgError = "";
            }, 3000);
          }
        }
      } catch (error) {
        this.error = true;
        setTimeout(() => {
          this.error = true;
        }, 2000);
      }
      // if (
      //   (!Validation.password(this.formModel.password) &&
      //     !Validation.password(this.formModel.confirmpassword)) ||
      //   this.formModel.password != this.formModel.confirmpassword
      // ) {
      //   this.error = true;
      //   setTimeout(() => {
      //     this.error = true;
      //   }, 2000);
      // } else {

      // }
    },

    async getUserDatas() {
      const datas = await Authentification.getUserDatas(this.token);
      // console.log("===> ", datas);

      //console.log(datas);

      if (datas.account.entreprise[0].libelle === "") {
        this.errorToken = false;
        localStorage.setItem("from", "auth");
        this.$router.push({ name: "create-entreprise" });
        // this.$router.push({
        //   name: "personnel",
        //   params: {
        //     country: "cg",
        //     entreprise: 'ayokai'
        //   },
        // });
      } else {
        this.errorToken = false;
        if (datas.account.entreprise[0] != null) {
          this.$router.push({
            name: "employe",
            params: {
              country: datas.account.entreprise[0].country,
              entreprise: datas.account.entreprise[0].libelle.trim(),
            },
          });
        } else {
          this.$router.push({
            name: "employe",
            params: {
              country: datas.account.entreprise[1].country,
              entreprise: datas.account.entreprise[1].libelle.trim(),
            },
          });
        }
      }
    },
  },
  /* setup() {
      const { t } = useI18n();
  
      return {
        t,
      };
    }, */
});
</script>

<style scoped>
#loginComp {
  overflow: hidden !important;
}

#loginComp::-webkit-scrollbar {
  display: none !important;
}

#loginCompChild::-webkit-scrollbar {
  display: none !important;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  background-color: #ffffff;
}

.select-wrapper {
  display: flex;
  align-items: center;
  background-color: var(--light-background-color, #ffffff);
  border-radius: 2px;
  padding: 5px 15px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  transition: background-color 0.3s ease, transform 0.3s ease;
  height: 40px;
}

.select-wrapper .flag-icon {
  margin-right: 10px;
  width: 24px;
  height: 24px;
}

.select-wrapper select {
  border: none;
  background: transparent;
  color: var(--primary-color, #333);
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

.select-wrapper select option {
  padding: 10px;
  color: var(--primary-color, #333);
}

.select-wrapper select:focus {
  outline: none;
}

.select-wrapper:hover {
  background-color: var(--secondary-background-color, #f5f4f4);
  transform: scale(1.05);
}
</style>
