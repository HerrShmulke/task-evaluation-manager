<script setup lang="ts">
import { syncRef } from '@vueuse/core';
import TextField from './TextField.vue';
import { ref } from 'vue';

interface IProps {
  caption: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
});

const model = defineModel<number>({
  required: true,
});

const localModel = ref('');

syncRef(localModel, model, {
  transform: {
    ltr: (val) => Number(val),
    rtl: (val) => val.toString(),
  },
});
</script>

<template>
  <TextField
    v-model="localModel"
    type="string"
    :caption="props.caption"
    :placeholder="props.placeholder"
  />
</template>
