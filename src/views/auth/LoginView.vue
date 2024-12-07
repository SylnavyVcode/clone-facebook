<template>
  <LoginPage></LoginPage>
</template>
  

<script lang="ts">
import LoginPage from "../../components/auth/TheLoginComponent";
import { defineComponent } from "vue";


export default defineComponent({
  name: "login",

  components: { LoginPage },

  mounted() {
      //console.log("on he login view");
      
  },
});
</script>
