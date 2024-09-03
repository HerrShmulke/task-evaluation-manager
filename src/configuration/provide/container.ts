import { ProjectService } from '@/application/project/services/project-service';
import { injectionKeys } from './injection-keys';
import { InjectionKey } from 'vue';
import { ProjectResource } from '@/infrastructure/project/project-resource';
import { RouteService } from '@/infrastructure/services/route-service/route-service';
import { EmployeeService } from '@/application/employee/services/employee-service';
import { EmployeeResource } from '@/infrastructure/employee/employee-resource';

type ProvideFn = (key: InjectionKey<unknown>, value: unknown) => void;

export function bindServices(provide: ProvideFn) {
  const projectResource = new ProjectResource();

  provide(injectionKeys.projectService, new ProjectService(projectResource));
  provide(
    injectionKeys.employeeService,
    new EmployeeService(new EmployeeResource(projectResource))
  );
  provide(injectionKeys.routeService, new RouteService());
}
