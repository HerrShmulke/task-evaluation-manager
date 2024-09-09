import { pages } from '@/infrastructure/routes/pages';
import { IRouteService } from './route-service.interface';
import { RouteLocationRaw, RouteParamsRawGeneric } from 'vue-router';
import { injectable } from 'inversify';

@injectable()
export class RouteService implements IRouteService {
  public getProjects() {
    return getRoute(pages.projects, {});
  }

  public getProjectsCreate() {
    return getRoute(pages.projectsCreate, {});
  }

  public getProjectsEdit(id: number) {
    return getRoute(pages.projectsEdit, { id });
  }

  public getEmployees() {
    return getRoute(pages.employees, {});
  }

  public getEmployeesCreate() {
    return getRoute(pages.employeesCreate, {});
  }

  public getEmployeesEdit(id: number): RouteLocationRaw {
    return getRoute(pages.employeesEdit, { id });
  }
}

function getRoute<T extends RouteParamsRawGeneric>(
  name: string,
  params: T
): RouteLocationRaw {
  return {
    name,
    params,
  };
}
