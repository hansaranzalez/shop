<script setup lang="ts">
import Product from "../../entities/Product";
import convertToCurrency from "../../utils/convertToCurrency";

defineProps<{
  product: Product;
}>();
</script>
<template>
    <div class="bg-white px-5 py-4 relative flex space-x-3">
        <div>
            <img :src="product.images[0].url" :alt="product.name" class="rounded-lg w-14 h-14" />
        </div>
        <div>
            <p class="text-sm text-gray-600">{{ product.name }}</p>
            <p class="text-sm text-olive-dark">{{ convertToCurrency(product.price) }}</p>
            <span class="absolute right-5 text-xs text-olive-dark">X{{ product.quantity }}</span>
        </div>
    </div>
</template>
