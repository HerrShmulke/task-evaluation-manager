<script setup lang="ts">
import { useRouter } from 'vue-router';
import VButton from '../buttons/VButton.vue';
import { inject } from 'vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';

const router = useRouter();

const routeService = inject(injectionKeys.routeService)!;

function navigateToCreateProject() {
  router.push(routeService.getProjectsCreate());
}
</script>

<template>
  <div class="project-create">
    <VButton @click="navigateToCreateProject">Создать проект</VButton>
  </div>
</template>

<style>
.project-create {
  border-bottom: 1px solid rgba(var(--ironside-gray-rgb), .4);
  background-color: var(--gray);
  padding: 16px 20px;
  display: flex;
  justify-content: flex-end;
}
</style>