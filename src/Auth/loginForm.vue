<script setup lang="ts">
import appStore from '../store/appStore';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import router from '../router';

const props = defineProps<{
  payload: {
    email: string;
    password: string;
  },
  validationRules: any;
}>();

const emit = defineEmits<{
  (event: 'submit', ...args: any[]): void;
}>();


const i18n = appStore.i18n();

const payload = ref(props.payload);

const loginForm = ref();

function onSubmit(): void {
  try {
    loginForm.value.validate(async (valid: boolean) => {
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
    ref="loginForm"
    :rules="validationRules"
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
          <el-button type="text" class="primaryBtn w-full" @click="onSubmit">{{
            i18n.authentication.login
          }}</el-button>
        </div>
        <div class="w-full">
          <el-button type="text" @click="$router.push('register')">{{
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

