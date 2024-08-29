import { RouteRecordRaw, RouteComponent } from 'vue-router';
import { pages } from '../pages';

export function getProjectsCreateRoute(
  component: RouteComponent
): RouteRecordRaw {
  return {
    name: pages.projectsCreate,
    path: '/projects/create',
    component,
  };
}
