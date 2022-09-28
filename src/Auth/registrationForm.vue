<script setup lang="ts">
import { ElMessage, type FormInstance } from "element-plus";
import { computed, ref } from "vue";
import AuthStore from "./@store";
import validationRules from './@store/validationRules';
import registerUser from './@actions/registerUser';
import registrationSuccess from "./landings/registrationSuccess.vue";
import type { RegistrationModuleContract } from "./@store/registrationFormModule";
import State from "@/State";

const i18n = computed(() => State().getI18n());
const store = AuthStore().getModule('registrationModule') as RegistrationModuleContract;
const payload = computed(() => store.getPayload())
const registrationForm = ref<FormInstance>();
const isSuccessfull = ref(false);
function onSubmit(): void {
  try {
    registrationForm.value?.validate(async (valid: boolean) => {
      if (!valid) return false;
      isSuccessfull.value = await registerUser(payload.value);;
    });
  } catch (error: any) {
    isSuccessfull.value = false;
    ElMessage(error.message)
  }
}
</script>

<template>
  <registrationSuccess v-if="isSuccessfull" :userEmail="payload.email"/>
  <el-form
    :model="payload"
    ref="registrationForm"
    :rules="validationRules.registration"
    label-width="80px"
    label-position="top"
    :inline="false"
    size="large"
  >
    <el-form-item prop="name">
      <el-input :placeholder="i18n.authentication.name" v-model="payload.name"></el-input>
    </el-form-item>
    <el-form-item prop="lastname">
      <el-input :placeholder="i18n.authentication.lastname" v-model="payload.lastname"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input :placeholder="i18n.authentication.email" v-model="payload.email"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input :placeholder="i18n.authentication.password" type="password" v-model="payload.password"></el-input>
    </el-form-item>
    <el-form-item prop="repeatPassword">
      <el-input :placeholder="i18n.authentication.repeatPassword" v-model="payload.repeatPassword" type="password"></el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input :placeholder="i18n.authentication.phone" v-model="payload.phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{ i18n.authentication.register }}</el-button>
      <el-button type="text" @click="$router.push('login')">{{ i18n.authentication.login }}</el-button>
    </el-form-item>
  </el-form>
</template>
