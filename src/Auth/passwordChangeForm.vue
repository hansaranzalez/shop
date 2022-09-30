<script setup lang="ts">
import { computed, ref } from "vue";
import appStore from "../store/appStore";
import shoppingSessionStore from "../store/shoppingSessionStore";
import formsValidationRules from "../utils/formsValidationRules";

const payload = computed(() =>
  shoppingSessionStore.getPasswordRecoveryPayload()
);

const i18n = appStore.i18n();

const passwordChangeForm = ref();

function onSubmit(): void {
  try {
  } catch (error) {}
}
</script>

<template>
  <p class="text-bold">{{ i18n.authentication.pleaseEnterNewPassword }}</p>
  <el-form
    :model="payload"
    ref="passwordChangeForm"
    :rules="formsValidationRules().passwordRecovery"
    label-width="80px"
    label-position="top"
    :inline="false"
    size="large"
  >
    <el-form-item prop="email">
      <el-input
        :placeholder="i18n.authentication.email"
        v-model="payload.email"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{
        i18n.authentication.recoverPassword
      }}</el-button>
      <el-button type="text" @click="$router.push('login')">{{
        i18n.authentication.login
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
