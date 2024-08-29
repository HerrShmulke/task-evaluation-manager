import { RouteComponent, RouteRecordRaw } from 'vue-router';
import { pages } from '../pages';

export function getEmployeesEditRoute(
  component: RouteComponent
): RouteRecordRaw {
  return {
    name: pages.employeesEdit,
    path: '/employees/:id/edit',
    component,
    props: (route) => ({
      id: Number(route.params.id),
    }),
  };
}
