<script setup lang="ts">
import { computed } from "vue";
import AppStore from "../../store/appStore";
import productsStore from "../../store/productsStore";

import { UserFilled } from "@element-plus/icons-vue";
import store from "../../store/store";

const productsSearchQuery = computed({
  get: () => productsStore.searchQuery(),
  set: (value) => productsStore.setSearchQuery(value),
});
</script>

<template>
  <div class="flex fixed top-0 left-0 right-0 p-5 z-30 space-x-1">
    <div class="flex-1 flex-col items-start justify-center">
      <!-- go back arrow-->
      <router-link
        v-if="$router.currentRoute.value.name !== 'productSearch'"
        :to="AppStore.getGoBackRoute()"
      >
        <button type="submit" class="textBtn w-10 h-10">
          <i class="text-olive fas fa-arrow-left" />
        </button>
      </router-link>
      <!-- home button -->
      <router-link to="/">
        <button type="submit" class="primaryBtn w-10 h-10">
          <i class="fas fa-home" />
        </button>
      </router-link>
    </div>
    <div class="flex-1 flex-col relative">
      <div
        class="relative"
        v-if="$router.currentRoute.value.name === 'productSearch'"
      >
        <!-- search bar -->
        <input
          v-model="productsSearchQuery"
          type="text"
          class=" w-44 h-10 px-3 text-base text-gray-700 placeholder-gray-600 border rounded-full focus:outline-none outline-indigo-900"
          placeholder="Search"
          aria-label="Search"
        />
        <!-- search button -->
        <button
          type="submit"
          class="absolute right-0 top-0 primaryBtn w-12 h-10"
        >
          <i class="text-xs fa fa-search"></i>
        </button>
      </div>
    </div>

    <div class="flex space-x-1">
      <div class="w-10 flex-col text-right relative">
        <!-- shopping cart button -->
        <router-link to="/shopping-cart">
          <button type="submit" class="primaryBtn w-10 h-10">
            <i class="text-xs fa fa-shopping-cart"></i>
          </button>
          <!-- notification badge -->
          <span
            v-if="store.shoppingSession.shopping_cart.getTotalQuantity() > 0"
            class="absolute -top-4 -right-2 block rounded-full h-5 w-5 leading-5 text-xs text-white text-center bg-red-900"
            >{{ store.shoppingSession.shopping_cart.getTotalQuantity() }}</span
          >
        </router-link>
      </div>
      <div class="w-10 flex-col text-right">
        <!-- user button -->
        <router-link to="/">
          <el-avatar
            :icon="UserFilled"
            size="medium"
            shape="circle"
            :src="store.shoppingSession.user.avatar.url"
            fit="fill"
          ></el-avatar>
        </router-link>
      </div>
    </div>
  </div>
</template>
