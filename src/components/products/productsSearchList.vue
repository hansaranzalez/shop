<script setup lang="ts">
import Product from "../../entities/Product";
import productsStore from "../../store/productsStore";
import productSearchItem from "./productSearchItem.vue";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="h-16 w-ful"></div>
  <div class="flex flex-col mx-auto space-y-5 p-5 h-full">
    <div class="flex">
      <div class="flex flex-col items-start justify-start flex-1">
        <p class="text-gray-400 text-xs">
          {{ products.length }} productos encontrados
        </p>
      </div>
      <div class="flex flex-col items-end justify-end flex-1">
        <!-- filters btn -->
        <button class="text-xs text-gray-600 font-semibold">
          <i class="fa-thin fa-filters"></i> Filtros
        </button>
      </div>
    </div>
    <div class="relative">
      <!-- no data placeholder -->
      <div
        v-if="products.length === 0"
        class="absolute inset-0 pt-52"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <i class="fa-regular fa-box-open text-5xl text-olive"></i>
          <p class="text-olive text-sm">0 productos encontrados</p>
        </div>
      </div>
      <!-- products list loading -->
      <div
        v-if="productsStore.loading()"
        class="h-full w-full bg-olive-light opacity-70 absolute inset-0"
      >
        <div class="flex items-center justify-center h-full">
          <i
            class="fa-solid fa-spinner-third animate-spin text-4xl text-olive-dark"
          ></i>
        </div>
      </div>
      <!-- products list -->
      <div class="grid grid-cols-2 gap-5">
        <product-search-item
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
