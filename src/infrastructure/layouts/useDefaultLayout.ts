import { RouteRecordRaw } from "vue-router";
import { useLayout } from "./useLayout";

export function useDefaultLayout(routes: RouteRecordRaw[]) {
  return useLayout(routes, () => import('./DefaultLayout.vue'));
}