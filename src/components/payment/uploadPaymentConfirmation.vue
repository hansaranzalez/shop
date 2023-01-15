<script lang="ts" setup>
import accounts from "./accounts.vue";
import checkoutBuyNowTray from "../checkout/checkoutBuyNowTray.vue";
import { ref } from "vue";
import store from "../../store/store";

const theFile = ref();
const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const preview = () => {
  dialogImageUrl.value = store.shoppingSession.payment_confirmation_image_url;
  dialogVisible.value = true;
};

function fileupload(e: any) {
  const file = e.target.files[0];
  store.shoppingSession.payment_confirmation_image = file;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const url = (e as any).target.result as string;
    store.shoppingSession.payment_confirmation_image_url = url;
  };
}

const upl = () => {
  theFile.value.click();
};
</script>
<template>
  <div class="p-5 bg-white">
    <p>Para continuar con la compra, por favor suba el comprobante de pago</p>
    <div
      @click="upl"
      class="w-10 h-10 rounded-lg border border-gray-300 cursor-pointer"
    >
      <i
        v-if="store.shoppingSession.payment_confirmation_image_url === ''"
        class="fas fa-plus-circle text-4xl text-gray-400"
      ></i>
      <i v-else class="fas fa-check-circle text-4xl text-green-400"></i>
    </div>
    <el-button
      v-if="store.shoppingSession.payment_confirmation_image_url !== ''"
      @click="preview"
      type="text"
      >
        <i class="fas fa-search-plus"></i>
      </el-button
    >
    <input ref="theFile" @change="fileupload" type="file" hidden />
    <el-dialog width="95%" v-model="dialogVisible" append-to-body>
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>
