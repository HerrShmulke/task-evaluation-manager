<script setup lang="ts">
import TextField from '../input/TextField.vue';
import VButton from '../buttons/VButton.vue';
import { EmployeeToSave } from '@/domain/employee/types';

interface IProps {
  submitText: string;
}

interface IEmits {
  (e: 'submit'): void;
}

const emit = defineEmits<IEmits>();
const props = defineProps<IProps>();

const model = defineModel<EmployeeToSave>({
  required: true,
});

function onSubmit() {
  emit('submit');
}
</script>

<template>
  <form class="employee-from" @submit.prevent="onSubmit">
    <TextField
      v-model="model.fullName"
      caption="Имя сотрудника"
      placeholder="Иванов Александр"
    />
    <VButton class="employee-from__submit" type="submit">
      {{ props.submitText }}
    </VButton>
  </form>
</template>

<style>
.employee-from {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: flex-end;
}

.employee-from__submit {
  width: max-content;
}
</style>
