<script setup lang="ts" generic="T">
import VLabel from '../VLabel/VLabel.vue';
import VListbox from './VListbox.vue';

interface IProps {
  caption: string;
  list: T[];
  getListId: (item: T) => string;
  multiple?: boolean;
}

const model = defineModel<T | T[]>({ required: true });

const props = defineProps<IProps>();
</script>

<template>
  <VLabel :label="props.caption" @click.prevent>
    <VListbox
      v-model="model"
      :list="props.list"
      :get-list-id="props.getListId"
      :multiple="props.multiple"
    >
      <slot />
      <template #item="attrs">
        <slot name="item" v-bind="attrs" />
      </template>
    </VListbox>
  </VLabel>
</template>
