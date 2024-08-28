<script setup lang="ts">
import IconButton from '../buttons/IconButton.vue';
import VText from '../VText/VText.vue';

interface IProps {
  fullName: string;
}

interface IEmits {
  (e: 'delete'): void;
  (e: 'edit'): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

function onEdit() {
  emit('edit');
}

function onDelete() {
  emit('delete');
}
</script>

<template>
  <div class="employee-snippet">
    <VText size="medium">{{ props.fullName }}</VText>

    <div class="employee-snippet__actions">
      <IconButton name="pencil" color="ghost" size="small" @click="onEdit" />
      <IconButton name="trash" color="danger" size="small" @click="onDelete" />
    </div>
  </div>
</template>

<style>
.employee-snippet {
  padding: 16px 20px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.employee-snippet:hover {
  border: 1px solid var(--blue);
}

.employee-snippet__actions {
  display: flex;
  column-gap: 8px;
}
</style>
