<template>
  <div
    v-if="!isTextLoaded"
    class="w-full h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
  >
    <!-- Section gerant la partie de droite -->
    <div class="h-screen w-full">
      <!-- Premiere Section -->
      <section>
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
          <div class="w-full px-3 space-y-1 lg:w-[500px]">
            <div>
              <!-- Partie Email  -->
              <label
                for="code_de_confirmation"
                class="form-label text-lg fs-1 font-semibold text-black opacity-75"
                >{{ text.authentification?.validate.label }} </label
              ><br />
              <input
                type="number"
                id="code_de_confirmation"
                v-model="formModel.code"
                @input="formatCode"
                autofocus
                :placeholder="text.authentification?.validate.label"
                :class="{
                  'w-full my-4 px-4 py-2 transition duration-300 border border-red-600 outline-red-600':
                    formBuilder.errorCode,
                  'w-full my-4  px-4 py-2 transition duration-300 border border-gray-300 rounded':
                    !formBuilder.errorCode,
                }"
              />
              <p
                class="flex text-red-500 font-open-sans font-semibold"
                v-show="formBuilder.errorCode"
              >
                <img
                  class="pr-2"
                  src="../../assets/images/login/warning.svg"
                  alt="warning icon"
                />
                {{ text.authentification?.validate.errorCode }}
              </p>
            </div>

            <div>
              <button
                type="submit"
                id="btn-submit"
                @click="validate()"
                class="w-full px-4 py-2 text-base font-bold text-white transition-colors duration-300 bg-black rounded-md shadow hover:bg-btn-blue-hover border-2 border-black"
              >
                <TheLoader v-if="isLoading"></TheLoader>
                {{ text.authentification?.validate.btnSend }}
              </button>
            </div>
            <!-- Boutton creer_un_compte -->

            <div>
              <button
                type="submit"
                id="btn-resend"
                @click="renvoyer()"
                class="w-full px-4 py-2 mt-1 text-base font-bold text-black transition-colors duration-300 bg-white rounded-md shadow hover:bg-black hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4 border-2 border-black"
              >
                <TheLoader v-if="isLoading2"></TheLoader>
                {{ text.authentification?.validate.btnsendback }}
              </button>
            </div>
          </div>
        </div>

        <!-- Fin de la partie Principale -->
      </section>
      <!-- Fin de la partie section -->
    </div>

    <!-- Section gerant la partie de gauche [ IMAGE DE FOND GAUCHE ]-->
    <div
      class="h-screen w-full flex justify-center items-center"
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
    v-if="!isTextLoaded"
    class="font-poppins fixed flex flex-col items-end right-5 bottom-8"
  >
    <div
      v-show="formModel.successValidate"
      class="max-w-lg relative flex bg-white p-3 rounded-md border-l-6 border-green-700 m-2"
    >
      <img src="../../assets/images/login/success.svg" alt="success-icon" />
      <div class="flex-auto pl-4">
        <p class="font-semibold">
          <b>{{ text.authentification?.validate.successPopup.title }}</b>
        </p>
        <p class="text-sm pt-1 pr-8">
          {{ text.authentification?.validate.successPopup.body }}
        </p>
      </div>
      <img
        class="absolute top-3 right-3 cursor-pointer"
        src="../../assets/images/login/close.svg"
        @click="closeSuccessPopup"
      />
    </div>

    <div
      v-if="formModel.successResend"
      class="max-w-lg relative flex bg-white p-3 rounded-md border-l-6 border-amber-300 m-2"
    >
      <img src="../../assets/images/login/caution.svg" alt="caution-icon" />
      <div class="flex-auto pl-4">
        <p class="font-semibold">
          <b>{{ text.authentification?.validate.warningPopup.title }}</b>
        </p>
        <p class="text-sm pt-1 pr-8">
          {{ text.authentification?.validate.warningPopup.body }}
        </p>
      </div>
      <img
        class="absolute top-3 right-3 cursor-pointer"
        src="../../assets/images/login/close.svg"
        id="btnClose1"
        @click="closeResendPopup"
      />
    </div>

    <div
      v-show="formModel.errorValidate"
      class="max-w-md relative flex bg-white p-3 rounded-md border-l-6 border-red-700 m-2"
    >
      <img src="../../assets/images/login/error.svg" alt="error-icon" />
      <div class="flex-auto pl-4">
        <p class="font-semibold">
          <b>{{ text.authentification?.validate.ErrorPopup.title }}</b>
        </p>
        <p class="text-sm pt-1 pr-8">
          {{ text.authentification?.validate.ErrorPopup.body }}
        </p>
      </div>
      <img
        class="absolute top-3 right-3 cursor-pointer"
        src="../../assets/images/login/close.svg"
        id="btnClose2"
        @click="closeErrorPopup"
      />
    </div>

    <div
      v-if="formModel.errorResend"
      class="max-w-md relative flex bg-white p-3 rounded-md border-l-6 border-red-700 m-2"
    >
      <img src="../../assets/images/login/error.svg" alt="error-icon" />
      <div class="flex-auto pl-4">
        <p class="font-semibold">
          <b>{{ text.authentification?.validate.ResendPopup.title }}</b>
        </p>
        <p class="text-sm pt-1 pr-8">
          {{ text.authentification?.validate.ResendPopup.body }}
        </p>
      </div>
      <img
        class="absolute top-3 right-3 cursor-pointer"
        src="../../assets/images/login/close.svg"
        id="btnClose3"
        @click="closeResendErrorPopup"
      />
    </div>
  </div>
  <TheLoaderMain v-if="isTextLoaded"></TheLoaderMain>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ValidateForm } from "../../formBuilder/auth/ValidateForm";

import { Authentification } from "../../services/auth/auth";

/* import { useI18n } from "vue-i18n"; */

/* import scriptLangVue from "../../locales/scriptLang.vue"; */

import { useAuthStore } from "../../stores/auth/index";
import TheLoaderMain from "../loader/Loadertrans.vue";
import TheLoader from "../loader/TheLoader.vue";
import { Formater } from "../../services/lib/formater";
import { Translator } from "../../services/lib/translator";

//interface for builder datas
interface ValidateBuilder {
  errorCode: boolean;
}

//interface for form datas and interactions
interface ValidateModel {
  code: number;
  errorValidate?: boolean;
  successValidate?: boolean;
  errorResend?: boolean;
  successResend?: boolean;
}

export default defineComponent({
  name: "Validate",
  components: { /*  scriptLangVue , */ TheLoader, TheLoaderMain },

  data() {
    return {
      isTextLoaded: true,
      formModel: {
        code: "" as any,
        errorValidate: false,
        successValidate: false,
      } as ValidateModel,
      formBuilder: {} as ValidateBuilder,
      authService: Authentification,
      test: false,
      isLoading: false as boolean,
      isLoading2: false as boolean,
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
    formatCode() {
      this.formModel.code = Formater.NonNegatif(this.formModel.code);
    },

    async validate() {
      this.isLoading = true;
      try {
        this.formBuilder = new ValidateForm()
          .setCode(this.formModel.code)
          .builderValidateForm();

        if (!this.formBuilder.errorCode) {
          const resp = await this.authService.validate(this.formModel.code);

          if (resp.code === 201) {
            this.formModel.successValidate = true;

            setTimeout(() => {
              this.formModel.successValidate = false;
              this.$router.push("/auth/login");
            }, 2000);
          } else {
            this.formModel.errorValidate = true;
            setTimeout(() => {
              this.formModel.errorValidate = false;
            }, 2000);
          }
        }
      } catch (error) {}
      this.isLoading = false;
    },
    closeSuccessPopup() {
      this.formModel.successValidate = false;
    },
    closeResendPopup() {
      this.formModel.successResend = false;
    },
    closeErrorPopup() {
      this.formModel.errorValidate = false;
    },
    closeResendErrorPopup() {
      this.formModel.errorResend = false;
    },
    async renvoyer() {
      this.isLoading2 = true;
      try {
        const email = useAuthStore().getEmail();
        const password = useAuthStore().getPassword();
        const resp = await new Authentification(email, password).register(null);

        if (resp.code === 201) {
          this.formModel.successResend = true;

          setTimeout(() => {
            this.formModel.successResend = false;
          }, 2000);
        } else {
          this.formModel.errorResend = true;

          setTimeout(() => {
            this.formModel.errorResend = false;
          }, 2000);
        }
      } catch (error) {}
      this.isLoading2 = false;
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
