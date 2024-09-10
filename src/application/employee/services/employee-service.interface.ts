import { EmployeeView } from '../employee-view';
import { CreateEmployeeDTO } from '../use-cases/create-employee-use-case/create-employee-dto';
import { DeleteEmployeeDTO } from '../use-cases/delete-employee-use-case/delete-employee-dto';
import { GetEmployeeDTO } from '../use-cases/get-employee-use-case/get-employee-dto';
import { UpdateEmployeeDTO } from '../use-cases/update-employee-use-case/update-employee-dto';

// @todo Вынести в domain
export interface IEmployeeService {
  create(createEmployeeDTO: CreateEmployeeDTO): Promise<EmployeeView>;
  update(updateEmployeeDTO: UpdateEmployeeDTO): Promise<EmployeeView>;
  getById(getEmployeeDTO: GetEmployeeDTO): Promise<EmployeeView>;
  getAll(): Promise<EmployeeView[]>;
  delete(deleteEmployeeDTO: DeleteEmployeeDTO): Promise<void>;
}
