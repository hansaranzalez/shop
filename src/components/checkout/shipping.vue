<script lang="ts" setup>
import store from '../../store/store';
import convertToCurrency from '../../utils/convertToCurrency';
</script>
<template>
    <div class="p-5 bg-white">
        <div class="flex text-xs">
            <p class="flex-1">Costo de envio</p>
            <p class="flex-1 text-right font-semibold">{{ convertToCurrency(store.shoppingSession.delivery_fee) }}</p>
        </div>
    </div>
</template>