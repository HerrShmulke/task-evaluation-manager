<script setup lang="ts">
import { computed } from 'vue';
import { TextSize } from './types/text-size';
import { TexSizeService } from './services/text-size-service';

interface IProps {
  tag?: string;
  size?: TextSize;
}

const props = withDefaults(defineProps<IProps>(), {
  tag: 'span',
  size: 'default',
});

const textSizeService = new TexSizeService();

const textConfig = computed(() => textSizeService.getTextConfig(props.size));
const fontSize = computed(() => textConfig.value.size)
const fontLineHeight = computed(() => textConfig.value.lineHeight);
</script>

<template>
  <component :is="props.tag" class="v-text">
    <slot />
  </component>
</template>

<style>
.v-text {
  font-size: v-bind(fontSize);
  line-height: v-bind(fontLineHeight);
}
</style>