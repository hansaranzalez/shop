<script setup lang="ts">
import Product from "../../entities/Product";
import convertToCurrency from "../../utils/convertToCurrency";
import quantityVue from "../common/quantity.vue";
import shoppingSessionStore from '../../store/shoppingSessionStore';
import { vOnClickOutside } from "@vueuse/components";
import { ref } from "vue";

const confirmDeleteVisible = ref(false);

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="bg-white relative h-44 shadow-sm">
    <button
      v-if="!confirmDeleteVisible"
      @click="confirmDeleteVisible = true"
      class="absolute top-0 right-0 text-gray-400 hover:text-red-500 p-5"
    >
      <i class="fa-regular fa-trash"></i>
    </button>
    <div class="flex h-full">
      <div class="flex-1">
        <div class="flex space-x-2 border-b border-gray-300 py-5 mx-5">
          <div>
            <img
              :src="product.images[0].url"
              alt=""
              srcset=""
              class="rounded-2xl w-28 h-28"
            />
          </div>
          <div>
            <p
              class="text-sm text-gray-500"
              @click="
                $router.push({ name: 'product', params: { id: product.id } })
              "
            >
              {{ product.name }}
            </p>
            <p class="text-lg font-semibold text-gray-600">
              {{ convertToCurrency(product.price) }}
            </p>
            <div>
              <quantityVue :product="product" />
            </div>
          </div>
        </div>
        <div>
          <div class="flex w-1/2 space-x-2 p-1 ml-auto">
            <p class="text-xs font-semibold text-gray-500">Sub total:</p>
            <p class="text-xs text-gray-600 font-semibold">
              {{ convertToCurrency(product.totalPrice) }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-on-click-outside="() => (confirmDeleteVisible = false)"
        @click="shoppingSessionStore.removeProduct(product)"
        v-if="confirmDeleteVisible"
        class="w-16 h-full bg-red-900 cursor-pointer"
      >
        <div class="flex items-center justify-center h-full">
          <i class="fa-regular fa-trash text-white"></i>
        </div>
    </div>
    </div>
  </div>
</template>
