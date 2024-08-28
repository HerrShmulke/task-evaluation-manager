import { EmployeeToSave } from "@/domain/employee/types";
import { EmployeeDTO } from "../employee-dto";

export interface IEmployeeService {
  create(employee: EmployeeToSave): Promise<EmployeeDTO>;
  update(employeeId: number, employee: EmployeeToSave): Promise<EmployeeDTO>;
  getById(employeeId: number): Promise<EmployeeDTO>;
  getAll(): Promise<EmployeeDTO[]>;
  delete(employeeId: number): Promise<void>;
}