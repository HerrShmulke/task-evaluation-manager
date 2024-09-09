import { EmployeeFullName } from './value-objects/employee-full-name';
import { EmployeeInaccuracy } from './value-objects/employee-inaccuracy';

export interface EmployeeProperties {
  fullName: EmployeeFullName;
  inaccuracy: EmployeeInaccuracy;
}
