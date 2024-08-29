import { pages } from '@/infrastructure/routes/pages';
import { IRouteService } from './route-service.interface';
import { RouteLocationRaw, RouteParamsRawGeneric } from 'vue-router';

export class RouteService implements IRouteService {
  getProjects() {
    return getRoute(pages.projects, {});
  }

  getProjectsCreate() {
    return getRoute(pages.projectsCreate, {});
  }

  getProjectsEdit(id: number) {
    return getRoute(pages.projectsEdit, { id });
  }

  getEmployees() {
    return getRoute(pages.employees, {});
  }

  getEmployeesCreate() {
    return getRoute(pages.employeesCreate, {});
  }

  getEmployeesEdit(id: number): RouteLocationRaw {
    return getRoute(pages.employeesEdit, { id });
  }
}

function getRoute<T extends RouteParamsRawGeneric>(
  name: string,
  params: T
): RouteLocationRaw {
  return {
    name,
    params
  };
}
