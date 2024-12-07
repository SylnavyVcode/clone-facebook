<template>
   <ResetPage></ResetPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResetPage from "../../components/auth/TheResetComponent.vue";

export default defineComponent({
  name: "Reset Password",
  components: {
    ResetPage,
  },
});
</script>
