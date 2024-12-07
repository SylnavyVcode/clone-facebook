<template>
  <main>
    <body class="font-poppins bg-gray-facebook overflow-x-hidden">
      <main v-if="!load" class="lg:pl-8 min-h-screen xl:pt-0">
        <!-- s: Sidebar -->
        <TheSidebarComponent
          :TEXT="text"
          class="hidden lg:block"
        ></TheSidebarComponent>
        <!-- e: Sidebar -->

        <div class="h-full relative overflow-y-auto lg:ml-56">
          <!-- s: Header-->
          <TheHeaderComponent :TEXT="text"></TheHeaderComponent>
          <!-- e: Header -->
          <!-- main content S-->
          <!-- <div v-if="isClient">
            <CookieConsentVue v-if="!isCookie"></CookieConsentVue>
          </div> -->
          <RouterView></RouterView>
          <!-- main content E-->
        </div>
      </main>

      <theLoadingPage v-if="load"></theLoadingPage>
    </body>
  </main>
</template>

<script lang="ts">
import TheSidebarComponent from "../components/home/TheSidebarComponent.vue";
// import CookieConsentVue from "../components/cookies/TheCookiesComponent.vue";
import TheHeaderComponent from "../components/home/TheHeaderComponent.vue";
import { Entreprise } from "../services/entreprise";
import theLoadingPage from "../components/loader/Loadertrans.vue";
import { Translator } from "../services/lib/translator";
import { useEntrepriseStore } from "../stores/entreprise";
import { defineComponent } from "vue";
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
export default defineComponent({
  components: {
    TheSidebarComponent,
    TheHeaderComponent,
    theLoadingPage,
    // CookieConsentVue,
  },
  data() {
    return {
      entreprise: [] as any[],
      token: localStorage.getItem("token"),
      load: true,
      text: {},
      // isCookie: false,
      // isClient: false,
    };
  },
  methods: {
    async fetchText(lang) {
      this.text = await Translator.getEntLangTranslate(lang);
      // const setText = useEntrepriseStore().setTexts(this.text);
      // const getText = useEntrepriseStore().getTexts();
      // console.log("getText", getText);

      this.load = false;
    },
    async getEntrepriseDatas() {
      this.load = true;
      const resp = await Entreprise.getEntreprise(
        this.token,
        this.$route.params.country.toString(),
        this.$route.params.entreprise.toString()
      );
      if (resp.status == "success") {
        useEntrepriseStore().setEntreprise(resp.entreprise[0]);
        const entreprise = resp.entreprise[0];
        sessionStorage.setItem("_pc", entreprise.plan_comptable);

        console.log("HOME ENT DATAS ==W ", entreprise);
        if (entreprise && typeof entreprise.lang === "string") {
          this.entreprise = entreprise;
          await this.fetchText(entreprise?.lang);
        }
        this.load = false;
      } else if (resp.response.data) {
        this.$router.push("/");
      } else {
        this.$router.push("/");
      }
      this.load = false;
    },
  },
  // setup() {
  //   const isCookie = ref(false);

  //   // Fonction pour vérifier le consentement analytique
  //   function checkCookieConsent() {
  //     const cookieName = "cc_cookie=";
  //     const cookieString = document.cookie
  //       .split("; ")
  //       .find((row) => row.startsWith(cookieName));

  //     if (cookieString) {
  //       try {
  //         const cookieValue = cookieString.split("=")[1];
  //         const cookieConsent = JSON.parse(decodeURIComponent(cookieValue));

  //         // Vérifie si la catégorie "analytics" est présente
  //         isCookie.value =
  //           Array.isArray(cookieConsent.categories) &&
  //           cookieConsent.categories.includes("analytics");
  //       } catch (error) {
  //         console.error(
  //           "Erreur lors de la lecture du cookie de consentement:",
  //           error
  //         );
  //         isCookie.value = false;
  //       }
  //     } else {
  //       isCookie.value = false;
  //     }
  //   }

  //   // Fonction pour gérer le consentement donné par l'utilisateur
  //   function handleConsentGiven(consent: boolean) {
  //     isCookie.value = consent;

  //     if (consent && import.meta.env.MODE === "development") {
  //       const script = document.createElement("script");
  //       script.src = `https://www.googletagmanager.com/gtag/js?id=${
  //         import.meta.env.VITE_GOOGLE_ANALYTICS_ID
  //       }`;
  //       script.async = true;
  //       document.head.appendChild(script);

  //       script.onload = () => {
  //         window.dataLayer = window.dataLayer || [];
  //         window.gtag = function gtag() {
  //           window.dataLayer.push(arguments);
  //         } as any;
  //         window.gtag("js", new Date());
  //         window.gtag("config", import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
  //       };
  //     }
  //   }

  //   onMounted(() => {
  //     checkCookieConsent();
  //   });

  //   return {
  //     isCookie,
  //     handleConsentGiven,
  //   };
  // },

  async created() {
    // this.$router.push("/TheLoadingPage")

    this.load = true;
    await this.getEntrepriseDatas();
    this.load = false;
  },
  // mounted() {
  //   this.isClient = true;
  //   const doc = document.cookie;
  //   const val = doc.split(";");

  //   for (let i = 0; i < val.length; i++) {
  //     if (val[i].startsWith("cc_cookie")) {
  //       // console.log('message: okey')
  //       this.isCookie = true;
  //     }
  //   }
  // },
});
</script>
