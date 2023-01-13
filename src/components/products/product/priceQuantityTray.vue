<script setup lang="ts">
import Product from "../../../entities/Product";
import convertToCurrency from "../../../utils/convertToCurrency";
import { vOnClickOutside } from "@vueuse/components";
import { ref, computed } from "vue";
import quantityVue from "../../common/quantity.vue";
import store from "../../../store/store";

const props = defineProps<{
  product: Product;
}>();

const isDescriptionVisible = ref(false);
const isProductInCart = computed(() =>
store.shoppingSession.shopping_cart.findProductInCart(props.product)
);
</script>

<template>
  <div
    v-on-click-outside="() => (isDescriptionVisible = false)"
    class="absolute z-20 bg-white bottom-0 left-0 right-0 p-5 space-y-5 rounded-tl-3xl rounded-tr-3xl shadow-md"
  >
    <div class="text-center">
      <!-- slide open button -->
      <button
        @click="isDescriptionVisible = !isDescriptionVisible"
        class="flex items-center justify-center h-2 mx-auto bg-gray-300 rounded-xl"
        :class="{
          'w-12': !isDescriptionVisible,
          'w-8': isDescriptionVisible,
        }"
      />
    </div>
    <div class="flex">
      <div class="flex-1 flex flex-col justify-center items-start">
        <p class="text-gray-600 text-lg">{{ product.name }}</p>
      </div>
      <div class="flex-1 flex flex-col justify-center items-end">
        <p class="text-3xl text-gray-600 font-semibold">
          {{ convertToCurrency(product.price) }}
        </p>
      </div>
    </div>
    <div class="flex">
      <div class="flex-1 flex flex-col justify-center items-start">
        <p class="text-xs text-gray-600">Cantidad</p>
      </div>
      
      <quantity-vue :product="product" />
      
    </div>
    <div v-if="isDescriptionVisible" class="space-y-2">
      <p>Descripcion</p>
      <p class="h-32 text-xs text-gray-600 leading-8">
        {{ product.description }}
      </p>
    </div>
    <div>
      <!-- add to cart button-->
      <button
        v-if="!isProductInCart"
        @click="store.shoppingSession.shopping_cart.addProduct(product)"
        class="primaryBtn h-16 w-80 mx-auto"
      >
        ADD TO CART
      </button>
      <button
        v-if="isProductInCart"
        @click="store.shoppingSession.shopping_cart.removeProduct(product)"
        class="dangerBtn h-16 w-80 mx-auto"
      >
        Remove from cart
      </button>
    </div>
  </div>
</template>
