<script setup lang="ts">
import { ref } from 'vue';
import PageWidth from '../components/PageWidth.vue';
import ProjectForm from '../components/projects/ProjectForm.vue';
import VText from '../components/VText/VText.vue';
import { useRouter } from 'vue-router';
import { useCreateProjectMutation } from '../../infrastructure/project/queries/useCreateProjectMutation';
import { ProjectToSave } from '@/domain/project/types';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { useEmployeesQuery } from '@/infrastructure/employee/queries/useEmployeesQuery';
import { container } from '@/configuration/provide/container';

const formData = ref<ProjectToSave>({
  name: '',
  employees: [],
});

const { mutate } = useCreateProjectMutation();

const { isSuccess, data: employees } = useEmployeesQuery();

const router = useRouter();

const routeService = container.get(injectionKeys.routeService)!;

async function createProject() {
  if (formData.value === undefined) return;

  mutate({
    name: formData.value.name,
    employees: formData.value.employees,
  });

  router.push(routeService.getProjects());
}
</script>

<template>
  <PageWidth class="projects-create-page">
    <VText tag="h1" class="projects-create-page__title" size="medium">
      Создание проекта
    </VText>
    <ProjectForm
      v-if="isSuccess"
      v-model="formData"
      submit-text="Создать"
      :employees="employees"
      @submit="createProject"
    />
  </PageWidth>
</template>

<style>
.projects-create-page {
  padding: 16px 20px;
  background-color: var(--gray);
}

.projects-create-page__title {
  margin: 0;
  margin-bottom: 24px;
}
</style>
