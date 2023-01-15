<script setup lang="ts">
import addressVue from "./address.vue";
import shipping from "./shipping.vue";
import checkOutProductsListVue from "./checkOutProductsList.vue";
import checkoutBuyNowTrayVue from "./checkoutBuyNowTray.vue";
import store from "../../store/store";
</script>
<template>
  <div class="space-y-5">
    <div class="h-20 bg-white"></div>
    <!-- shipping address -->
    <div>
      <addressVue />
    </div>
    <!-- products -->
    <div>
      <checkOutProductsListVue :products="store.shoppingSession.shopping_cart.products"/>
    </div>
    <div>
      <shipping />
    </div>
    <!-- comments -->
    <div class="bg-white p-5 space-y-5">
      <p class="text-xs text-gray-600">Comentarios</p>
      <textarea class="rounded-2xl w-full p-5 border-gray-300 border"></textarea>
    </div>
    <!-- total -->
    <div>
      <checkoutBuyNowTrayVue />
    </div>
  </div>
</template>
