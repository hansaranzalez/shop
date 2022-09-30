<script setup lang="ts">
import registrationFormVue from "../../Auth/registrationForm.vue";
import shoppingSessionStore from "../../store/shoppingSessionStore";
import formValidationRules from "../../utils/formsValidationRules";
import registerUser from "../../Auth/@actions/registerUser";

async function register(payload: any): Promise<void> {
    try {
      console.log(payload);
        shoppingSessionStore.setUserRegistrationForm(payload);
        const regpayload = shoppingSessionStore.getUserRegistrationPayload();
        console.log(regpayload);
        await registerUser();
    } catch (error: any) {
        console.log(error);
    }
}
</script>

<template>
  <div class="space-y-16">
    <section
      class="bg-olive text-white px-8 pt-24 pb-8 rounded-br-2xl space-y-5 rounded-bl-2xl"
    >
      <p class="text-2xl font-bold">Resgistrarse</p>
      <p class="text-sm">los alimentos son nuestra medicina.</p>
    </section>
    <main class="w-11/12 mx-auto">
      <registrationFormVue
        :payload="shoppingSessionStore.getUserRegistrationForm()"
        :validationRules="formValidationRules().registration"
        @submit="register"
      />
    </main>
  </div>
</template>
