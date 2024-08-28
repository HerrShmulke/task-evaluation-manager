<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import PageWidth from '../components/PageWidth.vue';
import ProjectForm from '../components/projects/ProjectForm.vue';
import VText from '../components/VText/VText.vue';
import { useRouter } from 'vue-router';
import { useProjectQuery } from '../../infrastructure/project/queries/useProjectQuery';
import { watch } from 'vue';
import { useUpdateProjectMutation } from '../../infrastructure/project/queries/useUpdateProjectMutation';
import { ProjectToSave } from '@/domain/project/types';
import { injectionKeys } from '@/configuration/provide/injection-keys';

interface IProps {
  id: number;
}

const props = defineProps<IProps>();

const { data: project } = useProjectQuery(props.id);
const updateProjectMutation = useUpdateProjectMutation();

const formData = ref<ProjectToSave>();

const hasFormData = computed(() => formData.value !== undefined);

watch(project, () => {
  if (project.value !== undefined) {
    formData.value = {
      name: project.value.name
    };
  }
});

const router = useRouter();

const routeService = inject(injectionKeys.routeService)!;

async function editProject() {
  if (formData.value === undefined) return;

  updateProjectMutation.mutate({
    id: props.id,
    name: formData.value.name
  });

  router.push(routeService.getProjects());
}
</script>

<template>
  <PageWidth class="projects-create-page">
    <VText tag="h1" class="projects-create-page__title" size="medium"
      >Изменение проекта</VText
    >
    <ProjectForm
      v-if="hasFormData"
      v-model="formData"
      submit-text="Изменить"
      @submit="editProject"
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
