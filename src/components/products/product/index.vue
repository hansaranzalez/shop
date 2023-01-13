<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import Product from "../../../entities/Product";
import priceQuantityTrayVue from "./priceQuantityTray.vue";

const props = defineProps<{
  product: Product;
}>();

</script>

<template>
  <div v-if="product">
    <Swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="[Pagination]"
      :slides-per-view="1"
      class="fixed inset-0"
    >
      <SwiperSlide v-for="(slide, index) in product.getImages()" :key="index">
        <div>
          <img :src="slide.url" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>

    <priceQuantityTrayVue :product="product" />
  </div>
</template>
