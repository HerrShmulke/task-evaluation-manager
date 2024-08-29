import { RouteComponent, RouteRecordRaw } from 'vue-router';
import { pages } from '../pages';

export function getProjectsRoute(component: RouteComponent): RouteRecordRaw {
  return {
    name: pages.projects,
    path: '/projects',
    component,
  };
}
