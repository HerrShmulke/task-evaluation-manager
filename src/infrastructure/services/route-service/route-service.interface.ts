import { RouteLocationRaw } from 'vue-router';

export interface IRouteService {
  getProjects(): RouteLocationRaw;

  getProjectsCreate(): RouteLocationRaw;

  getProjectsEdit(id: number): RouteLocationRaw;

  getEmployees(): RouteLocationRaw;

  getEmployeesCreate(): RouteLocationRaw;

  getEmployeesEdit(id: number): RouteLocationRaw;
}
