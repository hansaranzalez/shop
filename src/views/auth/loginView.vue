<script setup lang="ts">
import loginFormVue from "../../Auth/loginForm.vue";
import authenticate from "../../Auth/@actions/authenticate";
import shoppingSessionStore from "../../store/shoppingSessionStore";
import formValidationRules from "../../utils/formsValidationRules";
</script>

<template>
  <div class="space-y-16">
    <section
      class="bg-olive text-white px-8 pt-24 pb-8 rounded-br-2xl space-y-5 rounded-bl-2xl"
    >
      <p class="text-2xl font-bold">Ingresar</p>
      <p class="text-sm">los alimentos son nuestra medicina.</p>
    </section>
    <main class="w-11/12 mx-auto">
      <loginFormVue
        :payload="shoppingSessionStore.getLoginPayload()"
        :validationRules="formValidationRules().loginForm"
        @submit="authenticate"
      />
    </main>
  </div>
</template>
