<script setup lang="ts">
import { useProjectsQuery } from '@/infrastructure/project/queries/useProjectsQuery';
import ProjectsSnippet from './ProjectsSnippet.vue';
import { useDeleteProjectMutation } from '@/infrastructure/project/queries/useDeleteProjectMutation';
import { useRouter } from 'vue-router';
import { inject } from 'vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { ProjectDTO } from '@/application/project/project-dto';

const { data: projects } = useProjectsQuery();
const router = useRouter();

const deleteProjectMutation = useDeleteProjectMutation();

function deleteProject(project: ProjectDTO) {
  deleteProjectMutation.mutate(project);
}

const routeService = inject(injectionKeys.routeService)!;

function navigateToEditProject(project: ProjectDTO) {
  if (project.id !== undefined) { 
    router.push(routeService.getProjectsEdit(project.id))
  }
}
</script>

<template>
  <div class="projects-list">
    <div v-for="project in projects" :key="project.id" class="projects-list__item">
      <ProjectsSnippet :name="project.name" @delete="deleteProject(project)" @edit="navigateToEditProject(project)" />
    </div>
  </div>
</template>

<style>
.projects-list__item {
  margin-bottom: 12px;
  background-color: var(--gray);
  border: 1px solid transparent;
}

.projects-list__item:hover {
  border: 1px solid var(--blue);
}
</style>