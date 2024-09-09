import { Employees } from '../employee/employees';
import { ProjectName } from './value-objects/project-name';

export interface ProjectProperties {
  name: ProjectName;
  employees: Employees;
  // tasks: Tasks;
}
