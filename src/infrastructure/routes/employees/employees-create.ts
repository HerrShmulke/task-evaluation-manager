import { RouteRecordRaw, RouteComponent } from 'vue-router';
import { pages } from '../pages';

export function getEmployeesCreateRoute(
  component: RouteComponent
): RouteRecordRaw {
  return {
    name: pages.employeesCreate,
    path: '/employees/create',
    component,
  };
}
