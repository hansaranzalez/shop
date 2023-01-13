<script setup lang="ts">
import Product from '../../entities/Product';
import checkOutProduct from './checkOutProduct.vue';

    defineProps<{
        products: Product[];
    }>();
</script>
<template>
    <div class="space-y-5">
        <checkOutProduct v-for="product, index in products" :product="product" :key="index" />
    </div>
</template> 