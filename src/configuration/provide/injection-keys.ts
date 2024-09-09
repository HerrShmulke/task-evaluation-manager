import { IProjectService } from '@/application/project/services/project-service.interface';
import { IRouteService } from '@/infrastructure/services/route-service/route-service.interface';
import { interfaces } from 'inversify';
import { employeeKeys } from './employee-keys';

export const injectionKeys = {
  employee: employeeKeys,
  projectService: Symbol(
    'projectService'
  ) as interfaces.ServiceIdentifier<IProjectService>,
  routeService: Symbol(
    'routeService'
  ) as interfaces.ServiceIdentifier<IRouteService>,
} as const;
