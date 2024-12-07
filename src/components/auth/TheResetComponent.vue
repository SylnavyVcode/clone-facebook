<template>
  <div
    class="w-full h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
    v-if="!isTextLoaded"
  >
    <!-- Section gerant la partie de droite -->
    <div class="h-screen w-full">
      <!-- Premiere Section -->
      <section>
        <!-- Partie entete comprenant le logo-->

        <header class="flex-1 justify-center items-center header mb-2">
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
            <div class="w-full px-3 space-y-1">
              <div>
                <!-- Partie Email  -->
                <label
                  for="code_de_confirmation"
                  class="form-label text-lg fs-1 font-semibold text-black opacity-75"
                  >{{ text.authentification?.resetpassword.label }}</label
                ><br />
                <input
                  type="mail"
                  id="email"
                  v-model="formModel.email"
                  autofocus
                  :placeholder="
                    text.authentification?.resetpassword.placeholder
                  "
                  :class="{
                    'w-full my-4 px-4 py-2 transition duration-300 border border-red-600 outline-red-600':
                      formBuilder.errorEmail,
                    'w-full my-4  px-4 py-2 transition duration-300 border border-gray-300 rounded':
                      !formBuilder.errorEmail,
                  }"
                />
                <p
                  class="flex text-red-500 font-open-sans font-semibold"
                  v-show="formBuilder.errorEmail"
                >
                  <img
                    class="pr-2"
                    src="../../assets/images/login/warning.svg"
                    alt="warning icon"
                  />
                  {{ text.authentification?.resetpassword.incorectEmail }}
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  id="btn-submit"
                  @click="resset($event)"
                  class="w-full px-4 py-2 text-base font-bold text-white transition-colors duration-300 bg-black rounded-md shadow hover:bg-btn-blue-hover"
                >
                  <TheLoader v-if="isLoading"></TheLoader>
                  {{ text.authentification?.resetpassword.resetbtn }}
                </button>
              </div>
              <!-- Boutton creer_un_compte -->
            </div>
            <p class="w-full flex justify-center mt-20 text-center">
              <a
                target="_blank"
                href="https://facebook.com/subscribe.html"
                id="btnAboutUs"
                class="text-lg text-blue-800 hover:font-bold font-semibold pointer"
              >
                {{ text.authentification?.resetpassword.gestionLink }}
              </a>
            </p>
          </form>
        </div>
        <!-- Fin de la partie Principale -->
      </section>
      <!-- Fin de la partie section -->
    </div>

    <!-- Section gerant la partie de gauche [ IMAGE DE FOND GAUCHE ]-->
    <div
      class="h-screen w-full justify-center items-center hidden md:flex"
      style="background-color: #082471"
    >
      <img
        class="w-[450px]"
        alt="IMAGE_CODE"
        src="../../assets/images/Register/code.png"
      />
    </div>
  </div>
  <div
    class="font-poppins fixed flex flex-col items-end right-5 bottom-8"
    v-if="!isTextLoaded"
  >
    <div
      v-show="formModel.successReset || formModel.errorReset"
      class="max-w-lg relative flex bg-white p-3 rounded-md border-l-6 border-green-700 m-2"
    >
      <img src="../../assets/images/login/success.svg" alt="success-icon" />
      <div class="flex-auto pl-4">
        <p class="font-semibold">
          <b>{{ text.authentification?.resetpassword.successPopup.title }}</b>
        </p>
        <p class="text-sm pt-1 pr-8">
          {{ text.authentification?.resetpassword.successPopup.body }}
        </p>
      </div>
      <img
        class="absolute top-3 right-3 cursor-pointer"
        src="../../assets/images/login/close.svg"
        @click="closeSuccessPopup"
      />
    </div>

    <!-- <div class="max-w-lg relative flex bg-white p-3 rounded-md border-l-6 border-amber-300 m-2">
      <img src="../../assets/images/login/caution.svg" alt="caution-icon">
      <div class="flex-auto pl-4">
        <p><b>Avertissement</b></p>
        <p class="text-sm pt-1 pr-8">
          Veuillez vérifier vos mails pour le code de confirmation
        </p>
      </div>
      <img class="absolute top-3 right-3 cursor-pointer" src="../../assets/images/login/close.svg" >
    </div> -->

    <!-- <div
        v-show="formModel.errorReset"
        class="max-w-md relative flex bg-white p-3 rounded-md border-l-6 border-red-700 m-2"
      >
        <img src="../../assets/images/login/error.svg" alt="error-icon" />
        <div class="flex-auto pl-4">
          <p class="font-semibold">
            <b>Succes</b>
          </p>
          <p class="text-sm pt-1 pr-8">
            Si cet email existe, vous recevrez un e-mail de réinitialisation. Veuillez aussi vérifier vos spams
          </p>
        </div>
        <img
          class="absolute top-3 right-3 cursor-pointer"
          src="../../assets/images/login/close.svg"
          id="btnClose1"
          @click="closeErrorPopup"
        />
      </div> -->

    <!-- <div
         class="max-w-md relative flex bg-white p-3 rounded-md border-l-6 border-red-700 m-2"
       >
         <img src="../../assets/images/login/error.svg" />
         <div class="flex-auto pl-4">
           <p><b>Erreur</b></p>
           <p class="text-sm pt-1 pr-8">
             Veuillez renseigner tous les champs svp !
           </p>
         </div>
         <img
           class="absolute top-3 right-3 cursor-pointer"
           src="../../assets/images/login/close.svg"
           onclick="this.parentNode.parentNode.removeChild(this.parentNode);"
         />
       </div> -->
  </div>
  <TheLoaderMain v-if="isTextLoaded"></TheLoaderMain>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Authentification } from "../../services/auth/auth";
import { LoginForm } from "../../formBuilder/auth/loginForm";
/* import scriptLangVue from "../../locales/scriptLang.vue"; */
import TheLoaderMain from "../loader/Loadertrans.vue";
import TheLoader from "../loader/TheLoader.vue";
import { Translator } from "../../services/lib/translator";

//interface for builder datas
interface LoginBuilder {
  errorEmail: boolean;
  errorPassword: boolean;
}

//interface for form datas and interactions
interface ResetModel {
  email: string;
  errorReset?: boolean;
  successReset?: boolean;
}
export default defineComponent({
  name: "Reset",
  components: { /* scriptLangVue, */ TheLoader, TheLoaderMain },

  data() {
    return {
      isTextLoaded: true,
      formModel: {
        email: "",
        errorReset: false,
        successReset: false,
      } as ResetModel,
      formBuilder: {} as LoginBuilder,
      authService: Authentification,
      test: false,
      isLoading: false,
      text: {} as any,
      selectedLanguage: "en-EN",
      flagUrl: "https://cdn.weglot.com/flags/circle/gb.svg",
      langueLocal: "" as string,
    };
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

    async resset(e: Event) {
      e.preventDefault();
      this.isLoading = true;

      this.formBuilder = new LoginForm()
        .setEmail(this.formModel.email)
        .builderLoginForm();

      if (!this.formBuilder.errorEmail) {
        const resp = await this.authService.reset(this.formModel.email);

        if (resp.code === 200) {
          this.formModel.successReset = true;

          setTimeout(() => {
            this.formModel.successReset = false;
            this.$router.push("/auth/login");
          }, 3000);
        } else {
          this.formModel.errorReset = true;
          setTimeout(() => {
            this.formModel.errorReset = false;
          }, 3000);
        }
      }

      this.isLoading = false;
    },
    closeSuccessPopup() {
      this.formModel.successReset = false;
    },
    closeErrorPopup() {
      this.formModel.errorReset = false;
    },
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
  /* setup() {
    const { t } = useI18n();

    return {
      t,
    };
  }, */
});
</script>
<style scoped>
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
