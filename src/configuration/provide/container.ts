import 'reflect-metadata';
import { Container } from 'inversify';
import { EmployeeService } from '@/application/employee/services/employee-service';
import { EmployeeMapper } from '@/application/employee/mappers/employee-mapper';
import { injectionKeys } from './injection-keys';
import { EmployeeRepository } from '@/infrastructure/employee/employee-repository/employee-repository';
import { RouteService } from '@/infrastructure/services/route-service/route-service';
import { ProjectService } from '@/application/project/services/project-service';
import { ProjectMapper } from '@/application/project/mappers/project-mapper';
import { ProjectResource } from '@/infrastructure/project/project-resource';

export const container = new Container();

export function bindServices() {
  container.bind(injectionKeys.employee.employeeService).to(EmployeeService);
  container.bind(injectionKeys.employee.employeeMapper).to(EmployeeMapper);
  container.bind(injectionKeys.project.projectService).to(ProjectService);
  container.bind(injectionKeys.project.projectMapper).to(ProjectMapper);
  container.bind(injectionKeys.project.projectRepository).to(ProjectResource);

  container
    .bind(injectionKeys.employee.employeeRepository)
    .to(EmployeeRepository);
  container.bind(injectionKeys.routeService).to(RouteService);
}
