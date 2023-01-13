<script setup lang="ts">
import { computed } from "vue";
import shoppingCartListVue from "../components/shoppingCart/shoppingCartList.vue";
import store from "../store/store";

const products = computed(() => store.shoppingSession.shopping_cart.products);
</script>

<template>
  <shoppingCartListVue :products="products" />
</template>
