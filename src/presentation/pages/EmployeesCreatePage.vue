<script setup lang="ts">
import EmployeeForm from '@/presentation/components/employees/EmployeeForm.vue';
import { reactive } from 'vue';
import PageWidth from '../components/PageWidth.vue';
import VText from '../components/VText/VText.vue';
import { useCreateEmployeeMutation } from '@/infrastructure/employee/queries/useCreateEmployeeMutation';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { useRouter } from 'vue-router';
import { CreateEmployeeDTO } from '@/application/employee/use-cases/create-employee-use-case/create-employee-dto';
import { container } from '@/configuration/provide/container';

const data = reactive<CreateEmployeeDTO>({
  fullName: '',
  inaccuracy: 0,
});

const createEmployeeMutation = useCreateEmployeeMutation();
const routeService = container.get(injectionKeys.routeService)!;
const router = useRouter();

async function onCreateEmployee() {
  try {
    await createEmployeeMutation.mutateAsync(data);
    router.push(routeService.getEmployees());
  } catch {
    console.log('asd');
  }
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
