import { pages } from '@/infrastructure/routes/pages';
import { IRouteService } from './route-service.interface';
import { IRoute } from './types';

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
}

function getRoute<T extends object = object>(
  name: string,
  params: T
): IRoute<T> {
  return {
    name,
    params
  };
}
