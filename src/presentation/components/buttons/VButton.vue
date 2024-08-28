<script setup lang="ts">
import { computed } from 'vue';
import { ButtonColor } from './types/button-color';
import { IButtonColorConfig } from './types/button-color-config';
import { ColorService } from '@/presentation/services/color-service';
import { ButtonType } from './types/button-type';

interface IProps {
  color?: ButtonColor;
  type?: ButtonType;
}

const props = withDefaults(defineProps<IProps>(), {
  color: 'primary',
  type: 'button'
});

const colorRecord: Record<ButtonColor, IButtonColorConfig> = {
  primary: {
    color: ColorService.getBlue(),
    hoverColor: ColorService.getLightBlue()
  },
  danger: {
    color: ColorService.getRed(),
    hoverColor: ColorService.getLightRed()
  },
  ghost: {
    color: ColorService.getIronsideGray(),
    hoverColor: ColorService.getBermudaGray()
  }
};

const buttonColor = computed(() => colorRecord[props.color]);

const calculatedColor = computed(() => buttonColor.value.color);
const hoverColor = computed(() => buttonColor.value.hoverColor);
</script>

<template>
  <button class="v-button" :type="props.type">
    <slot />
  </button>
</template>

<style>
.v-button {
  background-color: transparent;
  border: 1px solid v-bind(calculatedColor);
  border-radius: 3px;
  color: v-bind(calculatedColor);
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 2.7rem;
  padding: 4px 12px;
  transition: 0.2s;
}

.v-button:hover {
  color: v-bind(hoverColor);
  border: 1px solid v-bind(hoverColor);
}
</style>
