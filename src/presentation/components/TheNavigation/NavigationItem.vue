<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

interface IProps {
  to: RouteLocationRaw;
}

const props = defineProps<IProps>();
</script>

<template>
  <RouterLink class="navigation-item" :to="props.to">
    <slot />
  </RouterLink>
</template>

<style>
.navigation-item {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--bermuda-gray);
}

.navigation-item.router-link-active {
  color: var(--milk);
}
</style>