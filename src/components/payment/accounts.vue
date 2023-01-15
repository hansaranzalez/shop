<script lang="ts" setup>
import { ref } from "vue";

const activeNames = ref([]);
</script>
<template>
  <div class="p-5 bg-white">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="Bancolombia" name="1">
        <div class="flex">
            <p class="flex-1">Cuenta de Ahorro</p>
            <p class="flex-1 text-right">8569047380</p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Nequi" name="2">
        <div class="flex">
            <p class="flex-1">Numero</p>
            <p class="flex-1 text-right">3108389763</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
