<script setup lang="ts">
import { ElMessage } from "element-plus";
import appStore from "../../store/appStore";
import shoppingSessionStore from "../../store/shoppingSessionStore";
import convertToCurrency from "../../utils/convertToCurrency";

function checkIfUserIsLoggedIn() {
  const isLogged = shoppingSessionStore.isUserLoggedIn();
  if (isLogged) {
    appStore.setNotLoggedInMessageOnCheckout(false);
  } else {
    appStore.setNotLoggedInMessageOnCheckout(true);
  }
}
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 bg-white p-5 rounded-tl-3xl rounded-tr-3xl space-y-5"
  >
    <div class="flex">
      <div class="flex flex-1 flex-col items-start justify-start">
        <p class="text-sm text-gray-500">Sub total:</p>
      </div>
      <div class="flex flex-1 justify-end flex-col items-end">
        <p class="text-right text-xl text-gray-600 font-semibold">
          {{ convertToCurrency(shoppingSessionStore.getTotalPrice()) }}
        </p>
      </div>
    </div>
    <div>
      <button @click="checkIfUserIsLoggedIn" class="primaryBtn h-16 w-80 mx-auto">
        Checkout
      </button>
    </div>
  </div>
</template>
