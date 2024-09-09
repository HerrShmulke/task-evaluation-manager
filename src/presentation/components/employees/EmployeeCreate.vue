<script setup lang="ts">
import { useRouter } from 'vue-router';
import VButton from '../buttons/VButton.vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import PageHeader from '../PageHeader.vue';
import { container } from '@/configuration/provide/container';

const router = useRouter();

const routeService = container.get(injectionKeys.routeService)!;

function navigateToCreateEmployee() {
  router.push(routeService.getEmployeesCreate());
}
</script>

<template>
  <PageHeader>
    <VButton @click="navigateToCreateEmployee">Добавить сотрудника</VButton>
  </PageHeader>
</template>
