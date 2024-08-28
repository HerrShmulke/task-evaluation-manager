<script setup lang="ts">
import TextField from '../input/TextField.vue';
import VButton from '../buttons/VButton.vue';
import { Project } from '@/domain/models/project';

interface IProps {
  submitText: string;
}

interface IEmits {
  (e: 'submit'): void;
}

const emit = defineEmits<IEmits>();
const props = defineProps<IProps>();

const model = defineModel<Project>({
  required: true,
});

function onSubmit() {
  emit('submit');
}
</script>

<template>
  <form class="project-form" @submit.prevent="onSubmit">
    <TextField v-model="model.name" caption="Название проекта" placeholder="Рога и копыта" />
    <VButton class="project-form__submit" type="submit">{{ props.submitText }}</VButton>
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