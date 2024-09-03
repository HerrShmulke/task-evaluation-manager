<script setup lang="ts">
const isSelectedModel = defineModel<boolean>({ required: true });
</script>

<template>
  <div class="v-checkbox" :class="{ 'v-checkbox--checked': isSelectedModel }">
    <div v-if="isSelectedModel" class="v-checkbox__check"></div>
  </div>
</template>

<style>
.v-checkbox {
  height: 16px;
  width: 16px;
  border-radius: 3px;
  border: 1px solid var(--bermuda-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray);
}

.v-checkbox--checked {
  background-color: var(--blue);
}

.v-checkbox__check {
  transition: none;
  width: 4px;
  height: 6px;
  border: solid var(--gray);
  display: block;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-top: -2px;
}
</style>
