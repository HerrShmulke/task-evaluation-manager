<script setup lang="ts">
import { useRouter } from 'vue-router';
import VButton from '../buttons/VButton.vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import PageHeader from '../PageHeader.vue';
import { container } from '@/configuration/provide/container';

const router = useRouter();

const routeService = container.get(injectionKeys.routeService)!;

function navigateToCreateProject() {
  router.push(routeService.getProjectsCreate());
}
</script>

<template>
  <PageHeader>
    <VButton @click="navigateToCreateProject">Создать проект</VButton>
  </PageHeader>
</template>
