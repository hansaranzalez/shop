<script lang="ts" setup>
import accounts from "./accounts.vue";
import checkoutBuyNowTray from "../checkout/checkoutBuyNowTray.vue";
import uploadPaymentConfirmation from "./uploadPaymentConfirmation.vue";
</script>
<template>
  <div class="h-20 bg-white"></div>
  <div class="p-5 bg-white">
    <p>Por el momento solo aceptamos pagos con trasferencia por Bancolombia o Nequi. Por favor seleccione una de las opciones para revelar los datos.</p>
  </div>
  <accounts />
  <uploadPaymentConfirmation />
  <checkoutBuyNowTray />
</template>
