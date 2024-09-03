<script setup lang="ts">
import { ProjectToSave } from '../../../domain/project/types';
import TextField from '../input/TextField.vue';
import VButton from '../buttons/VButton.vue';
import ListboxField from '../listbox/ListboxField.vue';
import { EmployeeDTO } from '../../../application/employee/employee-dto';
import { computed } from 'vue';

interface IProps {
  submitText: string;
  employees: EmployeeDTO[];
}

interface IEmits {
  (e: 'submit'): void;
}

const emit = defineEmits<IEmits>();
const props = defineProps<IProps>();

const model = defineModel<ProjectToSave>({
  required: true,
});

function onSubmit() {
  emit('submit');
}

function getEmployeeListId(item: string) {
  return item;
}

const listboxValueOf = computed(() =>
  model.value.employees.map((employee) => employee.fullName).join(', ')
);
</script>

<template>
  <form class="project-form" @submit.prevent="onSubmit">
    <TextField
      v-model="model.name"
      caption="Название проекта"
      placeholder="Рога и копыта"
    />
    <ListboxField
      v-model="model.employees"
      multiple
      caption="Сотрудники"
      :list="props.employees"
      :get-list-id="getEmployeeListId"
    >
      {{ listboxValueOf }}

      <template #item="item">
        {{ item.fullName }}
      </template>
    </ListboxField>
    <VButton class="project-form__submit" type="submit">{{
      props.submitText
    }}</VButton>
  </form>
</template>

<style>
.project-form {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: flex-end;
}

.project-form__submit {
  width: max-content;
}
</style>
