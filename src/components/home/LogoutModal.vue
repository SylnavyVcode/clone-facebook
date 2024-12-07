<template>
  <div
    class="z-30 w-full h-full fixed top-0 left-0 flex items-center justify-center"
    @click.self="closePaid"
  >
    <div v-if="Object.keys(text).length > 0">
      <div class="bg-white shadow-2xl border-2 w-[450px] p-8 rounded-xl">
        <h1 class="text-md font-bold text-center">
          <svg
            class="inline"
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833374 17.5H19.1667L10 1.66667L0.833374 17.5ZM10.8334 15H9.16671V13.3333H10.8334V15ZM10.8334 11.6667H9.16671V8.33333H10.8334V11.6667Z"
              fill="#FF0000"
            />
          </svg>
          <span> {{ text.logout.message }} </span>
        </h1>

        <div class="grid grid-cols-2 gap-4 mt-5">
          <button
            @click="Valider"
            class="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-[#FF0000] border rounded-md hover:bg-[#082471] focus:outline-none"
          >
            {{ text.logout.deconnexion }}
            <TheLoaderVue v-if="isLoading" class=""></TheLoaderVue>
          </button>

          <button
            @click="closePaid"
            class="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-black border rounded-md hover:bg-[#082471] focus:outline-none"
          >
            {{ text.logout.annuler }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TheLoaderVue from "../loader/TheLoader.vue";
import { useEntrepriseStore } from "../../stores/entreprise";
import { defineComponent } from "vue";
import { googleLogout } from "vue3-google-login";

export default defineComponent({
  name: "validate depense",
  components: { TheLoaderVue },
  // props: {
  //    ISLOADING: { type: Boolean }
  // },
  // watch: {
  //    ISLOADING(newDep) {
  //       this.isLoading = newDep;
  //       console.log("is Loading delete ==> ", newDep);

  //    },
  // },

  data() {
    return {
      isLoading: false,
      text: "" as any,
      token: localStorage.getItem("token"),
    };
  },

  methods: {
    async Valider() {
      this.isLoading = true;
      this.$cookies.remove("_rememberMe");
      this.$cookies.remove("__email");
      this.$cookies.remove("__secure_line");
      localStorage.removeItem("token");
      googleLogout();

      setTimeout(() => {
        this.$router.push("/");
      }, 500);
    },
    closePaid() {
      this.$emit("closeDel");
    },
  },
  async mounted() {
    this.text = await useEntrepriseStore().getTexts();
  },
});
</script>
