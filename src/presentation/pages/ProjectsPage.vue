<script setup lang="ts">
import PageWidth from '../components/PageWidth.vue';
import ProjectCreate from '../components/projects/ProjectCreate.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';
</script>

<template>
  <PageWidth class="projects-page">
    <ProjectCreate class="projects-page__header" />
    <ProjectsList />
  </PageWidth>
</template>

<style>
.projects-page__header {
  margin-bottom: 12px;
}
</style>
