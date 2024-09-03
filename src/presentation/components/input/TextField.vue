<script setup lang="ts">
import VLabel from '../VLabel/VLabel.vue';
import VInput from './VInput.vue';

interface IProps {
  caption: string;
  placeholder?: string;
  type?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
  type: undefined,
});

const model = defineModel<string>({
  required: true,
});
</script>

<template>
  <VLabel :label="props.caption">
    <VInput
      v-model="model"
      :placeholder="props.placeholder"
      :type="props.type"
    />
  </VLabel>
</template>
