<script setup lang="ts">
import TheHeader from '@/presentation/components/TheHeader.vue';
</script>

<template>
  <div class="default-layout">
    <TheHeader class="default-layout__header" />
    <RouterView />
  </div>
</template>

<style>
.default-layout__header {
  margin-bottom: 32px;
}
</style>
