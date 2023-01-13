<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import getProduct from "../actions/getProduct";
import Product from "../entities/Product";
import router from "../router";
import productVue from "../components/products/product/index.vue";
import store from "../store/store";

const productId = computed(() => router.currentRoute.value.params.id);
const product = ref<Product>();
onMounted(async () => {
  const productFromDb = await getProduct(
    (productId.value as unknown) as number
  );
  const foundProduct = store.shoppingSession.shopping_cart.findProductInCart(
    productFromDb
  );
  if (foundProduct) {
    product.value = foundProduct;
    return
  }
  product.value = productFromDb;
});
</script>

<template>
  <productVue v-if="product" :product="product" />
</template>
