<template>
    <ThePassewordChangeComponent></ThePassewordChangeComponent>
  </template>
    
  
  <script lang="ts">
  import ThePassewordChangeComponent from "../../components/auth/ThePassewordChangeComponent.vue";
  import { defineComponent } from "vue";
  
  
  export default defineComponent({
    name: "login",
  
    components: { ThePassewordChangeComponent },
  
    mounted() {
        //console.log("on he login view");
        
    },
  });
  </script>
  