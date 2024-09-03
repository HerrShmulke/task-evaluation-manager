<script setup lang="ts" generic="T">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { computed } from 'vue';
import VCheckbox from '../VCheckbox/VCheckbox.vue';

interface IProps {
  list: T[];
  getListId: (item: T) => string;
  multiple?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  multiple: false,
});

const selectedItems = defineModel<T | T[]>();

const viewValue = computed(() =>
  props.multiple ? (selectedItems.value as T[]).join(', ') : selectedItems.value
);
</script>

<template>
  <div class="v-listbox">
    <Listbox v-model="selectedItems" :multiple="props.multiple">
      <ListboxButton class="v-listbox__button">
        <slot>
          {{ viewValue }}
        </slot>
      </ListboxButton>
      <ListboxOptions class="v-listbox__options">
        <ListboxOption
          v-for="item in props.list"
          :key="getListId(item)"
          class="v-listbox__option"
          :value="item"
        >
          <template #default="{ selected }">
            <VCheckbox v-if="props.multiple" :model-value="selected" />
            <slot name="item" v-bind="item">
              {{ item }}
            </slot>
          </template>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<style>
.v-listbox {
  position: relative;
  width: 100%;
}

.v-listbox__button {
  background-color: var(--gray);
  border-radius: 3px;
  display: block;
  margin: 0;
  padding: 0 1.4rem;
  width: 100%;
  height: 40px;
  border: 1px solid var(--bermuda-gray);
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--milk);
  outline: none;
  width: 100%;
  text-align: left;
}

.v-listbox__button[aria-expanded='true'] {
  border: 1px solid var(--blue);
}

.v-listbox__options {
  position: absolute;
  width: 100%;
  background-color: var(--gray);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.7);
  padding: 0;
  margin: 12px 0 0 0;
}

.v-listbox__option {
  padding: 1.4rem 1.6rem;
  list-style: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  column-gap: 12px;
}

.v-listbox__option:not(:last-child) {
  border-bottom: 1px solid var(--bermuda-gray);
}

.v-listbox__option:hover {
  background-color: var(--bermuda-gray);
  border-bottom: 1px solid var(--bermuda-gray);
  color: var(--gray);
}
</style>
