<script setup lang="ts">
import TextField from '../input/TextField.vue';
import VButton from '../buttons/VButton.vue';
import { CreateEmployeeDTO } from '@/application/employee/use-cases/create-employee-use-case/create-employee-dto';
import NumberTextField from '../input/NumberTextField.vue';

interface IProps {
  submitText: string;
}

interface IEmits {
  (e: 'submit'): void;
}

const emit = defineEmits<IEmits>();
const props = defineProps<IProps>();

const model = defineModel<CreateEmployeeDTO>({
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
    <NumberTextField
      v-model="model.inaccuracy"
      caption="Неточность"
      placeholder="1.5"
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
