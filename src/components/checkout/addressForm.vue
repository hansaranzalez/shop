<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import formValidationRules from "../../utils/formsValidationRules";
import getList from "../../actions/getList";
import { getStatesByCountry } from "../../actions/getStatesByCountry";
import { getCitiesByState } from "../../actions/getCitiesByState";
import listsStore from "../../store/listsStore";
import store from "../../store/store";
import addressStore from "../../store/addressStore";
import { Country } from "../../entities/Country";
import { State } from "../../entities/State";
import { City } from "../../entities/City";

const formVisible = computed({
  get: () => addressStore.checkoutFormVisible.get(),
  set: (value) => addressStore.checkoutFormVisible.set(value),
});
const formPayload = ref({
  name: "",
  address: "",
  country: new Country(),
  state: new State(),
  city: new City(),
  postal_code: 0,
  for_shipping: true,
});
const countries = computed(() => listsStore.countries());
const states = computed(() => listsStore.states());
const cities = computed(() => listsStore.cities());

const setFromPayload = () => {
  store.shoppingSession.shipping_address.setAddress(formPayload.value);
  formVisible.value = false;
};
const reset = () => {
  formVisible.value = false;
  store.shoppingSession.shipping_address.reset();
};
onMounted(async () => {
  await getList("countries");
});
</script>
<template>
  <el-dialog v-model="formVisible" title="Direccion de envio" width="90%">
    <el-form
      ref="ruleFormRef"
      :model="formPayload"
      :rules="formValidationRules().shippingAddress"
      label-width="120px"
      class="demo-ruleForm"
      size="default"
      status-icon
      label-position="top"
    >
      <el-form-item label="Nombre" prop="name">
        <el-input v-model="formPayload.name" />
      </el-form-item>
      <el-form-item label="Direccion" prop="address">
        <el-input v-model="formPayload.address" />
      </el-form-item>
      <el-form-item label="Pais" prop="country">
        <el-select
          value-key="id"
          v-model="formPayload.country"
          placeholder="Selecciona un pais"
          clearable
          @change="getStatesByCountry(formPayload.country.id)"
        >
          <el-option
            v-for="country in countries"
            :key="country.id"
            :label="country.name"
            :value="country"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Estado" prop="state">
        <el-select
          :disabled="states.length === 0"
          value-key="id"
          v-model="formPayload.state"
          placeholder="Selecciona un estado"
          @change="getCitiesByState(formPayload.state.id)"
        >
          <el-option
            v-for="state in states"
            :key="state.id"
            :label="state.name"
            :value="state"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Ciudad" prop="city">
        <el-select
          :disabled="cities.length === 0"
          value-key="id"
          v-model="formPayload.city"
          placeholder="Selecciona una ciudad"
        >
          <el-option
            v-for="city in cities"
            :key="city.id"
            :label="city.name"
            :value="city"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Codigo postal" prop="postal_code">
        <el-input v-model="formPayload.postal_code" />
      </el-form-item>
      <el-form-item label="Para envio" prop="for_shipping">
        <el-switch v-model="formPayload.for_shipping" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="setFromPayload">
          Submit
        </el-button>
        <el-button @click="formVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
