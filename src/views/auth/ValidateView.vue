<template>
   <ValidatePage></ValidatePage>
</template>

<script lang="ts">

import { defineComponent } from "vue";

import ValidatePage from "../../components/auth/TheValidateComponent.vue"

   export default defineComponent({
      name: 'Validate',
      components: { ValidatePage }
   })
</script>