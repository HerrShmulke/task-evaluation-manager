<script setup lang="ts">
import PageWidth from './PageWidth.vue';
import TheNavigation from './TheNavigation/TheNavigation.vue';
</script>

<template>
  <header class="the-header">
    <PageWidth>
      <TheNavigation />
    </PageWidth>
  </header>
</template>

<style>
.the-header {
  border-bottom: 1px solid rgba(var(--ironside-gray-rgb), .4);
  background-color: var(--gray);
}
</style>