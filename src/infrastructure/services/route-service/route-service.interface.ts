import { IRoute } from './types';

export interface IRouteService {
  getProjects(): IRoute;

  getProjectsCreate(): IRoute;

  getProjectsEdit(id: number): IRoute;

  getEmployees(): IRoute;
}