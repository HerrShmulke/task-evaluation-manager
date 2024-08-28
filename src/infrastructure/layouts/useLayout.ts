import { RouteComponent, RouteRecordRaw } from "vue-router";

export function useLayout(routes: RouteRecordRaw[], layoutComponent: RouteComponent): RouteRecordRaw {
  return {
    path: '',
    component: layoutComponent,
    children: routes,
  };
}