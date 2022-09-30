<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";
import appStore from "../store/appStore";

const props = defineProps<{
  payload: {
    name: string;
    lastname: string;
    email: string;
    password: string;
    repeatPassword: string;
    phone: string;
  };
  validationRules: any;
}>();

const i18n = appStore.i18n();

const emit = defineEmits<{
  (event: 'submit', ...args: any[]): void;
}>();

const payload = ref(props.payload);

const registrationForm = ref();
function onSubmit(): void {
  try {
    registrationForm.value?.validate(async (valid: boolean) => {
      if (!valid) return false;
      emit('submit', payload.value);
    });
  } catch (error: any) {
    ElMessage(error.message);
  }
}
</script>

<template>
  <el-form
    :model="payload"
    ref="registrationForm"
    :rules="validationRules"
    label-width="80px"
    label-position="top"
    :inline="false"
    size="large"
  >
    <el-form-item prop="name">
      <el-input
        :placeholder="i18n.authentication.name"
        v-model="payload.name"
      ></el-input>
    </el-form-item>
    <el-form-item prop="lastname">
      <el-input
        :placeholder="i18n.authentication.lastname"
        v-model="payload.lastname"
      ></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input
        :placeholder="i18n.authentication.email"
        v-model="payload.email"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        :placeholder="i18n.authentication.password"
        type="password"
        v-model="payload.password"
      ></el-input>
    </el-form-item>
    <!-- <el-form-item prop="repeatPassword">
      <el-input
        :placeholder="i18n.authentication.repeatPassword"
        v-model="payload.repeatPassword"
        type="password"
      ></el-input>
    </el-form-item> -->
    <el-form-item prop="phone">
      <el-input
        :placeholder="i18n.authentication.phone"
        v-model="payload.phone"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="primaryBtn w-full" type="text" @click="onSubmit">{{
        i18n.authentication.register
      }}</el-button>
      <el-button type="text" class="w-full" @click="$router.push('login')">{{
        i18n.authentication.login
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
