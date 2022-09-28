<script setup lang="ts">
import Product from "../../entities/Product";
import shoppingCartItem from "./shoppingCartItem.vue";
import subTotalPriceTrayVue from "./subTotalPriceTray.vue";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="h-20 w-full bg-white mb-5"></div>
  <div class="space-y-5">
    <!-- no products placeholder -->
    <div v-if="products.length === 0">
      <div class="flex flex-col items-center justify-center h-full pt-52">
        <i class="fa-regular fa-cart-circle-exclamation text-5xl text-olive"></i>
        <p class="text-olive text-sm py-5">Aun no tienes productos en tu carrito</p>
      </div>
    </div>
    <shoppingCartItem
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>

  <subTotalPriceTrayVue />
</template>
