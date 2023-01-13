<script setup lang="ts">
import Product from "../../entities/Product";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="flex-1 flex justify-center items-start">
    <div class="flex flex-col justify-center">
      <!-- decrease button -->
      <button class="p-2" @click="product.decreaseQuantity">
        <i class="fas fa-minus" />
      </button>
    </div>
    <div class="flex flex-col justify-center">
      <!-- quantity input -->
      <input
        v-model="product.quantityInCart"
        disabled
        class="w-16 p-2 text-center rounded-xl"
        type="number"
        @input="product.calculateTotalPrice"
      />
    </div>
    <div class="flex flex-col justify-center items-center">
      <!-- increase button -->
      <button class="p-2" @click="product.increateQuantity">
        <i class="fas fa-plus" />
      </button>
    </div>
  </div>
</template>
