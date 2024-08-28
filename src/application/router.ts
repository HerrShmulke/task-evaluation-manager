import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export function createAppRouter(routes: readonly RouteRecordRaw[]) {
  return createRouter({
    history: createWebHistory(),
    routes
  });
}
