<template>
  <RegisterPage/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterPage from "../../components/auth/TheRegisterComponent.vue";

export default defineComponent({
  name: "Register",
  components: { RegisterPage },
});
</script>
