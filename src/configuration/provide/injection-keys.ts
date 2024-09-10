import { IRouteService } from '@/infrastructure/services/route-service/route-service.interface';
import { interfaces } from 'inversify';
import { employeeKeys } from './employee-keys';
import { projectKeys } from './project-keys';

export const injectionKeys = {
  employee: employeeKeys,
  project: projectKeys,
  routeService: Symbol(
    'routeService'
  ) as interfaces.ServiceIdentifier<IRouteService>,
} as const;
