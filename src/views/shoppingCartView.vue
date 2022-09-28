<script setup lang="ts">
import { computed } from "vue";
import shoppingCartListVue from "../components/shoppingCart/shoppingCartList.vue";
import shoppingSessionStore from "../store/shoppingSessionStore";

const products = computed(() => shoppingSessionStore.products());
</script>

<template>
  <shoppingCartListVue :products="products" />
</template>
