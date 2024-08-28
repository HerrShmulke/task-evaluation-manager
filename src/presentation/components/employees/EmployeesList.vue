<script setup lang="ts">
import { useEmployeesQuery } from '@/infrastructure/employee/queries/useEmployeesQuery';
import EmployeeSnippet from './EmployeeSnippet.vue';

const { data: employees } = useEmployeesQuery();
</script>

<template>
  <div class="employees-list">
    <div
      v-for="employee in employees"
      :key="employee.id"
      class="employees-list__item"
    >
      <EmployeeSnippet :full-name="employee.fullName" />
    </div>
  </div>
</template>

<style>
.employees-list__item {
  margin-bottom: 12px;
  background-color: var(--gray);
}
</style>
