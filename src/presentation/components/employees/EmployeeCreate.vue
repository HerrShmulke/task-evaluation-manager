<script setup lang="ts">
import { useRouter } from 'vue-router';
import VButton from '../buttons/VButton.vue';
import { inject } from 'vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import PageHeader from '../PageHeader.vue';

const router = useRouter();

const routeService = inject(injectionKeys.routeService)!;

function navigateToCreateEmployee() {
  router.push(routeService.getEmployeesCreate());
}
</script>

<template>
  <PageHeader>
    <VButton @click="navigateToCreateEmployee">Добавить сотрудника</VButton>
  </PageHeader>
</template>
