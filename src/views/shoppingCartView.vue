<script setup lang="ts">
import { computed } from "vue";
import shoppingCartListVue from "../components/shoppingCart/shoppingCartList.vue";
import shoppingSessionStore from "../store/shoppingSessionStore";
import checkout from '../components/shoppingCart/checkout/index.vue';

const products = computed(() => shoppingSessionStore.products());
const shoppingSessionSummaryVisible = computed(() => shoppingSessionStore.shoppingSessionSummaryVisible());
</script>

<template>
  <checkout v-if="shoppingSessionSummaryVisible" />
  <shoppingCartListVue v-else :products="products" />
</template>
