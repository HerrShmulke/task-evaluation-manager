<script setup lang="ts">
interface IProps {
  type?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
});

const model = defineModel<string>({
  required: true,
});
</script>

<template>
  <input v-model="model" :type="props.type" class="v-input" />
</template>

<style>
.v-input {
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
}

.v-input:focus {
  border: 1px solid var(--blue);
}
</style>
