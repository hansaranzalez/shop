<script setup lang="ts">
import sendShoppingSession from "../../actions/sendShoppingSession";
import store from "../../store/store";
import convertToCurrency from "../../utils/convertToCurrency";
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
          {{ convertToCurrency(store.shoppingSession.getTotalPrice()) }}
        </p>
      </div>
    </div>
    <div>
      <button @click="sendShoppingSession" class="primaryBtn h-16 w-80 mx-auto">
        Buy now
      </button>
    </div>
  </div>
</template>
