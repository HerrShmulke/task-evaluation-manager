<script setup lang="ts">
import IconButton from '../buttons/IconButton.vue';
import VText from '../VText/VText.vue';

interface IProps {
  name: string;
}

interface IEmits {
  (e: 'delete'): void;
  (e: 'edit'): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

function onDelete() {
  emit('delete');
}

function onEdit() {
  emit('edit');
}
</script>

<template>
  <div class="projects-snippet">
    <VText size="medium">{{ props.name }}</VText>

    <div class="projects-snippet__actions">
      <IconButton name="pencil" color="ghost" size="small" @click="onEdit" />
      <IconButton name="trash" color="danger" size="small" @click="onDelete" />
    </div>
  </div>
</template>

<style>
.projects-snippet {
  padding: 16px 20px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.projects-snippet:hover {
  border: 1px solid var(--blue);
}

.projects-snippet__actions {
  display: flex;
  column-gap: 8px;
}
</style>