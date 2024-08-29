<script setup lang="ts">
import { useEmployeesQuery } from '@/infrastructure/employee/queries/useEmployeesQuery';
import EmployeeSnippet from './EmployeeSnippet.vue';
import { inject } from 'vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { useRouter } from 'vue-router';

const { data: employees } = useEmployeesQuery();
const routeService = inject(injectionKeys.routeService)!;
const router = useRouter();

function onEditEmployee(id: number) {
  router.push(routeService.getEmployeesEdit(id));
}
</script>

<template>
  <div class="employees-list">
    <div
      v-for="employee in employees"
      :key="employee.id"
      class="employees-list__item"
    >
      <EmployeeSnippet
        :full-name="employee.fullName"
        @edit="onEditEmployee(employee.id)"
      />
    </div>
  </div>
</template>

<style>
.employees-list__item {
  margin-bottom: 12px;
  background-color: var(--gray);
}
</style>
