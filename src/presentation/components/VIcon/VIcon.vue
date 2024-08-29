<script setup lang="ts">
import { computed, ComponentInstance } from 'vue';
import TrashIcon from './icons/TrashIcon.vue';
import PencilIcon from './icons/PencilIcon.vue';
import { IconName } from './types/icon-name';
import { IconSize } from './types/icon-size';

interface IProps {
  name: IconName;
  size?: IconSize;
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'medium',
});

// eslint-disable-next-line
const iconsRecord: Record<IconName, ComponentInstance<any>> = {
  trash: TrashIcon,
  pencil: PencilIcon,
};

const iconComponent = computed(() => iconsRecord[props.name]);
const iconSize = computed(() => {
  if (props.size === 'small') {
    return '1.6rem';
  }

  if (props.size === 'medium') {
    return '2.4rem';
  }

  if (props.size === 'large') {
    return '3.2rem';
  }

  return '1.6rem';
});
</script>

<template>
  <div class="v-icon">
    <component :is="iconComponent" width="100%" height="100%" />
  </div>
</template>

<style>
.v-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(iconSize);
  height: v-bind(iconSize);
}
</style>
