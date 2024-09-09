<script setup lang="ts">
import EmployeeForm from '@/presentation/components/employees/EmployeeForm.vue';
import { computed, ref, toRefs, watch } from 'vue';
import PageWidth from '../components/PageWidth.vue';
import VText from '../components/VText/VText.vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { useRouter } from 'vue-router';
import { useUpdateEmployeeMutation } from '@/infrastructure/employee/queries/useUpdateEmployeeMutation';
import { useEmployeeQuery } from '@/infrastructure/employee/queries/useEmployeeQuery';
import { CreateEmployeeDTO } from '@/application/employee/use-cases/create-employee-use-case/create-employee-dto';
import { container } from '@/configuration/provide/container';

interface IProps {
  id: number;
}

const props = defineProps<IProps>();
const { id } = toRefs(props);

const { data: employee } = useEmployeeQuery(id.value);

const data = ref<CreateEmployeeDTO>();

const hasData = computed(() => data.value !== undefined);

watch(employee, () => {
  if (employee.value === undefined) return;

  data.value = {
    fullName: employee.value.fullName,
    inaccuracy: employee.value.inaccuracy,
  };
});

const updateEmployeeMutation = useUpdateEmployeeMutation();
const routeService = container.get(injectionKeys.routeService)!;
const router = useRouter();

function onUpdateEmployee() {
  if (data.value === undefined) return;

  updateEmployeeMutation.mutateAsync({
    id: id.value,
    fullName: data.value.fullName,
    inaccuracy: data.value.inaccuracy,
  });

  router.push(routeService.getEmployees());
}
</script>

<template>
  <PageWidth class="employees-create-page">
    <VText tag="h1" class="projects-create-page__title" size="medium">
      Изменение сотрудника
    </VText>

    <EmployeeForm
      v-if="hasData"
      v-model="data!"
      submit-text="Изменить"
      @submit="onUpdateEmployee"
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
