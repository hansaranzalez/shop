<script setup lang="ts">
import State from '@/State';
import { computed } from 'vue';

const i18n = computed(() => State().getI18n());

defineProps<{ userEmail: string }>();


</script>
<template>
<div class="absolute space-y-10 inset-0 flex flex-col items-center justify-center text-center z-20 bg-oliva-200 text-oliva text-xl font-semibold px-5 break-normal">
    <p class="text-semibold">{{ i18n.authentication.passwordRecovery}}</p>
    <p>{{ i18n.authentication.passwordChangeSuccessMessage }}</p>
</div>

</template>