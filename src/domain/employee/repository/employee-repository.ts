import { Employee } from '../employee';
import { EmployeeProperties } from '../employee.properties';

export interface IEmployeeRepository {
  getById(employeeId: number): Promise<Employee>;
  getAll(): Promise<Employee[]>;
  create(employee: EmployeeProperties): Promise<Employee>;
  update(employee: Employee): Promise<Employee>;
  delete(employeeId: number): Promise<void>;
}
