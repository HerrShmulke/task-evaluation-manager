<script setup lang="ts">
import { EmployeeToSave } from '@/domain/employee/types';
import EmployeeForm from '@/presentation/components/employees/EmployeeForm.vue';
import { inject, reactive } from 'vue';
import PageWidth from '../components/PageWidth.vue';
import VText from '../components/VText/VText.vue';
import { useCreateEmployeeMutation } from '@/infrastructure/employee/queries/useCreateEmployeeMutation';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { useRouter } from 'vue-router';

const data = reactive<EmployeeToSave>({
  fullName: '',
});

const createEmployeeMutation = useCreateEmployeeMutation();
const routeService = inject(injectionKeys.routeService)!;
const router = useRouter();

function onCreateEmployee() {
  createEmployeeMutation.mutate(data);
  router.push(routeService.getEmployees());
}
</script>

<template>
  <PageWidth class="employees-create-page">
    <VText tag="h1" class="projects-create-page__title" size="medium">
      Создание сотрудника
    </VText>

    <EmployeeForm
      v-model="data"
      submit-text="Добавить"
      @submit="onCreateEmployee"
    />
  </PageWidth>
</template>

<style>
.employees-create-page {
  padding: 16px 20px;
  background-color: var(--gray);
}

.employees-create-page__title {
  margin: 0;
  margin-bottom: 24px;
}
</style>
