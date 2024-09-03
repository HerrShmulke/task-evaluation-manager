<script setup lang="ts">
import VText from '../VText/VText.vue';

interface IProps {
  label: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <label class="v-label">
    <VText class="v-label__caption" size="small">{{ props.label }}</VText>
    <slot />
  </label>
</template>

<style>
.v-label {
  width: 100%;
}

.v-label__caption {
  font-size: 1.4rem;
  margin-bottom: 12px;
  display: block;
}
</style>
