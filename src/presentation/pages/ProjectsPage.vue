<script setup lang="ts">
import PageWidth from '../components/PageWidth.vue';
import ProjectActions from '../components/projects/ProjectActions.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';
</script>

<template>
  <PageWidth class="projects-page">
    <ProjectActions class="projects-page__header" />
    <ProjectsList />
  </PageWidth>
</template>

<style>
.projects-page__header {
  margin-bottom: 12px;
}
</style>
