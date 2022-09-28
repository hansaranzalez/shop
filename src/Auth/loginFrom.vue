<script setup lang="ts">
import authenticate from "./@actions/authenticate";
import router from "@/router";
import { ElMessage } from "element-plus";
import { computed, ref } from "vue";
import validationRules from "./@store/validationRules";
import State from "@/State";

const i18n = computed(() => State().getI18n());

const payload = ref({ email: "", password: "" });
const loginForm = ref();

function onSubmit(): void {
  try {
    loginForm.value.validate(async (valid: boolean) => {
      if (!valid) return false;
      await authenticate(payload.value);
      router.push("/");
    });
  } catch (error: any) {
    ElMessage(error.message);
  }
}
</script>

<template>
  <el-form
    :model="payload"
    ref="loginForm"
    :rules="validationRules.loginForm"
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
    <el-form-item prop="password">
      <el-input
        :placeholder="i18n.authentication.password"
        v-model="payload.password"
        type="password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <div class="flex w-full flex-col items-center text-center">
        <div class="w-full">
          <el-button type="primary" @click="onSubmit">{{
            i18n.authentication.login
          }}</el-button>
        </div>
        <div class="w-full">
          <el-button type="text" @click="$router.push('registration')">{{
            i18n.authentication.register
          }}</el-button>
        </div>
        <div class="w-full">
          <el-button type="text" @click="$router.push('password-recovery')">{{
            i18n.authentication.forgotPassword
          }}</el-button>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

