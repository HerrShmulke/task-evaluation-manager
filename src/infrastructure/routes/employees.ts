import { RouteComponent, RouteRecordRaw } from "vue-router";
import { pages } from "./pages";

export function getEmployeesRoute(component: RouteComponent): RouteRecordRaw {
  return {
    name: pages.employees,
    path: '/employees',
    component,
  }
}