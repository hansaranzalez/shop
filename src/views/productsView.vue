<script setup lang="ts">
import { computed, onMounted } from 'vue';
import getProducts from '../actions/getProducts';
import productsSearchListVue from '../components/products/productsSearchList.vue';
import Product from '../entities/Product';
import productsStore from '../store/productsStore';


const products = computed<Product[]>(() => productsStore.products());
onMounted(async () => await getProducts());
    

</script>

<template>

    <productsSearchListVue :products="products" />

</template>