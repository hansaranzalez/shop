<script setup lang="ts">
  import helperBarVue from './components/common/helperBar.vue';
  import youreNotLoggedInVue from './components/shoppingCart/checkout/youreNotLoggedIn.vue';
  import appStore from './store/appStore';

</script>

<template>
  <helperBarVue />
  <youreNotLoggedInVue v-if="appStore.getNotLoggedInMessageOnCheckout()" />
  <router-view />
</template>

<style scoped>
</style>
