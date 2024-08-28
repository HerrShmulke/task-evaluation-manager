import { Employee } from "../employee";
import { EmployeeToSave } from "../types";

export interface IEmployeeRepository {
  getById(employeeId: number): Promise<Employee>;
  getAll(): Promise<Employee[]>;
  create(employee: EmployeeToSave): Promise<Employee>;
  update(employeeId: number, employee: EmployeeToSave): Promise<Employee>;
  delete(employeeId: number): Promise<void>;
}