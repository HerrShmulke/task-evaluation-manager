import { RouteComponent, RouteRecordRaw } from 'vue-router';
import { pages } from '../pages';

export function getProjectsEditRoute(
  component: RouteComponent
): RouteRecordRaw {
  return {
    name: pages.projectsEdit,
    path: '/projects/:id/edit',
    component,
    props: (route) => ({
      id: Number(route.params.id),
    }),
  };
}
