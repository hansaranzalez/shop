<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import getList from "../../../actions/getList";
import appStore from "../../../store/appStore";
import listsStore from "../../../store/listsStore";
import shoppingSessionStore from "../../../store/shoppingSessionStore";
import shippingAddressFormVue from "./shippingAddressForm.vue";
import formsValidationRules from "../../../utils/formsValidationRules";

const countries = computed(() => listsStore.countries());
const states = computed(() => listsStore.states());
const cities = computed(() => listsStore.cities());
const formVisible = ref(false);

onMounted(async () => {
  await getList("countries");
  await getList("states");
  await getList("cities");
});
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
        <button @click="formVisible = true" class="textBtn text-xs">Editar</button>
      </div>
    </div>
    <!-- shipping details-->
    <div class="pl-8 py-3">
      <p class="text-lg text-gray-600 font-semibold">{{ shoppingSessionStore.getLoggedUser().name ? shoppingSessionStore.getLoggedUser().name : 'Sin usuario' }}</p>
      <p class="text-xs text-gray-600">
        {{
          shoppingSessionStore.getUserShippingAddressPayload().address_line_1 ? shoppingSessionStore.getUserShippingAddressPayload().address_line_1 : "No hay direccion"
        }}
      </p>
      <p class="text-xs text-gray-600"
        v-if="
          shoppingSessionStore.getUserShippingAddressPayload()
            .address_line_2 !== ''
        "
      >
        {{
          shoppingSessionStore.getUserShippingAddressPayload().address_line_2
        }}
      </p>
      <p class="text-xs text-gray-600">
        {{ shoppingSessionStore.getUserShippingAddressPayload().city.name ? shoppingSessionStore.getUserShippingAddressPayload().city.name : "No hay ciudad" }}
      </p>
      <p class="text-xs text-gray-600">
        {{ shoppingSessionStore.getUserShippingAddressPayload().state.name ? shoppingSessionStore.getUserShippingAddressPayload().state.name : "No hay estado" }}
      </p>
      <p class="text-xs text-gray-600">
        {{ shoppingSessionStore.getUserShippingAddressPayload().postal_code ? shoppingSessionStore.getUserShippingAddressPayload().postal_code : "No hay codigo postal" }}
      </p>
    </div>
  </div>
  <!-- shipping address form-->
  <shippingAddressFormVue
    v-if="formVisible"
    :payload="shoppingSessionStore.getUserShippingAddressPayload()"
    :countryList="countries"
    :stateList="states"
    :cityList="cities"
    :validationRules="formsValidationRules().shippingAddress"
    @close="formVisible = false"
  />
</template>
