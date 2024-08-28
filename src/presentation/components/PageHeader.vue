<template>
  <div class="page-header">
    <slot />
  </div>
</template>

<style>
.page-header {
  border-bottom: 1px solid rgba(var(--ironside-gray-rgb), .4);
  background-color: var(--gray);
  padding: 16px 20px;
  display: flex;
  justify-content: flex-end;
}
</style>