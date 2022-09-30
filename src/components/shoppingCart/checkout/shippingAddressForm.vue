<script setup lang="ts">
import { ref } from "vue";
import { ICity, ICountry, IState } from "../../../@types";

const props = defineProps<{
  payload: {
    address_line_1: string;
    address_line_2: string;
    city: ICity;
    state: IState;
    postal_code: string;
    country: ICountry;
  };
  countryList: ICountry[];
  stateList: IState[];
  cityList: ICity[];
  validationRules: any;
}>();

const payload = ref(props.payload);
const countryList = ref(props.countryList);
const stateList = ref(props.stateList);
const cityList = ref(props.cityList);

</script>
<template>
  <div class="bg-white absolute inset-0 z-30">
    <div>
      <input
        type="text"
        v-model="payload.address_line_1"
        placeholder="Direccion linea 1"
      />
    </div>
    <div>
      <input
        type="text"
        v-model="payload.address_line_2"
        placeholder="Direccion linea 2"
      />
    </div>
    <div>
      <select v-model="payload.city" placeholder="Ciudad">
        <option v-for="city in cityList" :value="city">
          {{ city.name }}
        </option>
      </select>
    </div>
    
    <div>
      <select v-model="payload.state" placeholder="Pais">
        <option v-for="state in stateList" :value="state">
          {{ state.name }}
        </option>
      </select>
    </div>

    <div>
      <select v-model="payload.country" placeholder="Departamento">
        <option v-for="country in countryList" :value="country">
          {{ country.name }}
        </option>
      </select>
    </div>

    <div>
      <input
        type="text"
        v-model="payload.postal_code"
        placeholder="Codigo postal"
      />
    </div>
    <div>
      <button @click="$emit('close')">Cerrar</button>
    </div>
  </div>
</template>
