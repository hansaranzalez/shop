<script setup lang="ts">
import { ref } from "vue";
import shoppingSessionStore from "../../../store/shoppingSessionStore";
import ListsStore from "../../../store/listsStore";
const formPayload = ref(shoppingSessionStore.getUserShippingAddressPayload());
</script>
<template>
  <div>
    <div>
      <input
        type="text"
        v-model="formPayload.address_line_1"
        placeholder="Direccion linea 1"
      />
    </div>
    <div>
      <input
        type="text"
        v-model="formPayload.address_line_2"
        placeholder="Direccion linea 2"
      />
    </div>
    <div>
      <select v-model="formPayload.city" placeholder="Ciudad">
        <option v-for="city in ListsStore.cities()" :value="city">
          {{ city.name }}
        </option>
      </select>
    </div>
    <div>
      <select v-model="formPayload.country" placeholder="Departamento">
        <option v-for="country in ListsStore.countries()" :value="country">
          {{ country.name }}
        </option>
      </select>
    </div>
    <div>
      <select v-model="formPayload.state" placeholder="Pais">
        <option v-for="state in ListsStore.countries()" :value="state">
          {{ state.name }}
        </option>
      </select>
    </div>
    <div>
      <input
        type="text"
        v-model="formPayload.postal_code"
        placeholder="Codigo postal"
      />
    </div>
  </div>
</template>
