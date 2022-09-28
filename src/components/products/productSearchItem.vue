<script setup lang="ts">
import Product from "../../entities/Product";
import convertToCurrency from "../../utils/convertToCurrency";

defineProps<{
  product: Product;
}>();
</script>
<template>
    <div class="space-y-2">
      <div
        :style="{
          width: '100%',
          height: '262px',
          backgroundImage: `url('${'https://picsum.photos/163/262'}')`,
        }"
        class="overflow-hidden rounded-2xl bg-cover bg-no-repeat"
      ></div>
      <div class="flex space-x-3">
        <div class="flex flex-col items-center justify-center">
          <p
            @click="
              $router.push({ name: 'product', params: { id: product.id } })
            "
            class="text-gray-600 text-sm leading-3 cursor-pointer"
          >
            {{ product.name }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-lg text-gray-600 font-semibold">
            {{ convertToCurrency(product.price) }}
          </p>
        </div>
      </div>
    </div>
</template>
