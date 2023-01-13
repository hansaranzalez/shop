<script setup lang="ts">
import router from "../../router";
import appStore from "../../store/appStore";


function continueToLogin() {
  router.push("/login");
  appStore.setNotLoggedInMessageOnCheckout(false);
}
</script>
<template>
  <div
    class="bg-white fixed inset-0 z-40 flex flex-col items-center justify-center p-5"
  >
    <p class="text-2xl my-5">You're not logged in</p>
    <div class="w-full">
      <!-- please login button -->
      <button class="primaryBtn p-5 w-full" @click="continueToLogin">
        login
      </button>
    </div>
    <div class="w-full">
      <!-- continue as guest button -->
      <button class="textBtn p-5 w-full" @click="">
        continue as guest
      </button>
    </div>
  </div>
</template>
