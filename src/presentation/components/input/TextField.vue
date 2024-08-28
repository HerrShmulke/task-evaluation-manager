<script setup lang="ts">
import VText from '../VText/VText.vue';
import VInput from './VInput.vue';

interface IProps {
  caption: string;
  placeholder?: string;
  type?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
  type: undefined
});

const model = defineModel<string>({
  required: true,
});
</script>

<template>
  <label class="text-field">
    <VText class="text-field__caption" size="small">{{ props.caption }}</VText>
    <VInput v-model="model" :placeholder="props.placeholder" :type="props.type" />
  </label>
</template>

<style>
.text-field {
  width: 100%;
}

.text-field__caption {
  font-size: 1.4rem;
  margin-bottom: 12px;
  display: block;
}
</style>