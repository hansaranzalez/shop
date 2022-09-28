<script setup lang="ts">import State from '@/State';
import { computed } from 'vue';

const i18n = computed(() => State().getI18n());

defineProps<{ userEmail: string }>();


</script>
<template>
<div class="absolute space-y-10 inset-0 flex flex-col items-center justify-center text-center z-20 bg-oliva-200 text-oliva text-xl font-semibold px-5 break-normal">
    <div>
        <p class="text-semibold">{{ i18n.authentication.registrationSuccess}}</p>
    <p>{{ i18n.authentication.registrationSuccessMessage.replace('#email#', userEmail) }}</p>
    </div>
    
    <el-button type="primary" size="default" @click="$router.push('/login')">{{ i18n.authentication.login }}</el-button>
    
</div>

</template>