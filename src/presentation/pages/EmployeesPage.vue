<script setup lang="ts">
import EmployeeCreate from '../components/employees/EmployeeCreate.vue';
import EmployeesList from '../components/employees/EmployeesList.vue';
import PageWidth from '../components/PageWidth.vue';
</script>

<template>
  <PageWidth>
    <EmployeeCreate class="employees-page__header" />
    <EmployeesList />
  </PageWidth>
</template>

<style>
.employees-page__header {
  margin-bottom: 12px;
}
</style>
