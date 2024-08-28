import { IEmployeeService } from '@/application/employee/services/employee-service.interface';
import { IProjectService } from '@/application/project/services/project-service.interface';
import { IRouteService } from '@/infrastructure/services/route-service/route-service.interface';
import { InjectionKey } from 'vue';

export const injectionKeys = {
  projectService: Symbol('projectService') as InjectionKey<IProjectService>,
  employeeService: Symbol('employeeService') as InjectionKey<IEmployeeService>,
  routeService: Symbol('routeService') as InjectionKey<IRouteService>
} as const;
