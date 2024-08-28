<script setup lang="ts">
import { IconName } from '../VIcon/types/icon-name';
import { IconSize } from '../VIcon/types/icon-size';
import VIcon from '../VIcon/VIcon.vue';
import { ButtonColor } from './types/button-color';
import VButton from './VButton.vue';

interface IProps {
  name: IconName;
  size?: IconSize;
  color?: ButtonColor;
}

const props = defineProps<IProps>();
</script>

<template>
  <VButton class="icon-button" :color="props.color">
    <VIcon :name="props.name" :size="props.size" />
  </VButton>
</template>

<style>
.icon-button {
  padding: 4px;
}
</style>
