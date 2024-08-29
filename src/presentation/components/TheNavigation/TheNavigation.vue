<script setup lang="ts">
import { inject } from 'vue';
import NavigationItem from './NavigationItem.vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';

const routeService = inject(injectionKeys.routeService)!;

const navigationList = [
  { name: 'Проекты', to: routeService.getProjects() },
  { name: 'Сотрудники', to: routeService.getEmployees() },
];
</script>

<template>
  <nav class="the-navigation">
    <NavigationItem
      v-for="navigation in navigationList"
      :key="navigation.name"
      :to="navigation.to"
    >
      {{ navigation.name }}
    </NavigationItem>
  </nav>
</template>

<style>
.the-navigation {
  display: flex;
  flex-direction: row;
  column-gap: 24px;
}
</style>
