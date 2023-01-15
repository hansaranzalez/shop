<script setup lang="ts">
import addressForm from "./addressForm.vue";
import store from "../../store/store";
import addressStore from "../../store/addressStore";
</script>

<template>
  <div class="px-5 py-2 bg-white">
    <div class="border-b border-gray-300 py-2 flex">
      <div class="flex flex-1 items-start justify-start space-x-5">
        <div class="flex flex-col items-start justify-start">
          <!-- location icon -->
          <i class="fas fa-map-marker-alt text-olive"></i>
        </div>
        <div class="flex flex-col items-end justify-end">
          <p class="text-xs text-gray-600">Direccion</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col items-end justify-end">
        <button @click="addressStore.checkoutFormVisible.set(true)" class="textBtn text-xs">
          Editar
        </button>
      </div>
    </div>
    <!-- shipping details-->
    <div class="pl-8 py-3">
      <p class="text-lg text-gray-600 font-semibold">
        {{
          store.shoppingSession.user.id !== ""
            ? store.shoppingSession.user.name
            : "Sin usuario"
        }}
      </p>
      <p class="text-xs text-gray-600">
        {{
          store.shoppingSession.getShippingAddress().address
            ? store.shoppingSession.getShippingAddress().address
            : "No hay direccion"
        }}
      </p>

      <p class="text-xs text-gray-600">
        {{
          store.shoppingSession.getShippingAddress().city.name
            ? store.shoppingSession.getShippingAddress().city.name
            : "No hay ciudad"
        }}
      </p>
      <p class="text-xs text-gray-600">
        {{
          store.shoppingSession.getShippingAddress().state.name
            ? store.shoppingSession.getShippingAddress().state.name
            : "No hay estado"
        }}
      </p>
      <p class="text-xs text-gray-600">
        {{
          store.shoppingSession.getShippingAddress().postal_code
            ? store.shoppingSession.getShippingAddress().postal_code
            : "No hay codigo postal"
        }}
      </p>
    </div>
  </div>
  <!-- shipping address form-->
  
    <addressForm />
</template>
