<template>
  <body class="overflow-x-hidden">
    <main
      class="sm:flex items-center sm:pl-8 min-h-screen xl:pt-0 2xl:pt-0 border-t-blue-950 border-t-6 sm:border-none"
    >
      <img
        class="absolute top-0 left-0 m-auto w-full z-0"
        src="../assets/images/login/theme/404-sparks.png"
        alt="404 page background"
      />
      <h1 class="absolute top-8 text-3xl font-semibold items-center">
        <img src="../assets/images/login/ayokai.svg" class="mr-4" alt="ayokai logo" />
      </h1>
      <div class="flex-0 h-5/6 relative pr-0 w-[618px] z-1">
        <div class="items-center">
          <!-- Content Wrapper-->
          <div
            class="lg:w-120 text-center flex-none lg:bg-white pr-12 rounded-md m-auto"
          >
            <h2
              class="font-roboto text-red-700 font-semibold text-3xl m-3 pb-8"
            >
            Erreur !
            </h2>
            <h3 class="font-poppins font-normal text-4xl m-2 pb-4">
              Quelque chose manque
            </h3>
            <p class="font-poppins text-xl pb-4">
              Cette page manque ou vous<br />
              avez mal inséré le lien.
            </p>
            <a
              class="m-auto block mt-8 w-1/2 p-3 text-base font-bold text-white transition-colors duration-300 bg-black rounded-md shadow hover:bg-btn-blue-hover w-[292px] h-[50px]"
              @click="$router.push('/auth/login')"
            >
            Accueil
            </a>
          </div>
          <!-- Left Side -->
        </div>
      </div>
      <div class="flex-1 sm:w-9/12 sm:h-screen bg-blue-950">
        <div class="text-center sm:h-screen grid items-center">
          <div class="pb-20 sm:pb-0 m-auto">
            <img class="m-auto" src="../assets/images/login/theme/404.png" />
            <!-- <p class="text-white pl-20 pr-20 md:w-2/3 m-auto">This page is missing or you entered the link incorrectly. This page is missing or you
                        entered the link incorrectly. This page is missing or you entered the link incorrectly.</p> -->
          </div>
        </div>
      </div>
      <!-- Right Side -->
    </main>

    <div class="font-poppins fixed flex flex-col items-end sm:right-5 bottom-8">
      <div
        class="drop-shadow-xl max-w-xl relative flex bg-white p-3 rounded-md border-l-6 border-red-700 m-2"
      >
        <img src="../assets/images/login/error.svg" />
        <div class="flex-auto pl-4">
          <p><b>Erreur !</b></p>
          <p class="text-sm pt-1 pr-8">
            Connexion perdue, veuillez rafraîchir la page
          </p>
        </div>
        <img
          class="absolute top-3 right-3 cursor-pointer"
          src="../assets/images/login/close.svg"
          onclick="this.parentNode.parentNode.removeChild(this.parentNode);"
        />
      </div>
    </div>
  </body>
</template>

<script lang="ts">

import { defineComponent } from "vue";
/* import scriptLangVue from "../locales/scriptLang.vue"; */

/* import { useI18n } from "vue-i18n"; */

export default defineComponent({
    name: 'Page404',
    components: { /* scriptLangVue */ },
    /* setup() {
        const { t } = useI18n();

        return {
            t
        }
    }, */
})
</script>