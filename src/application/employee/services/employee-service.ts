import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { IEmployeeService } from './employee-service.interface';
import { CreateEmployeeUseCase } from '../use-cases/create-employee-use-case';
import { DeleteEmployeeUseCase } from '../use-cases/delete-employee-use-case';
import { GetAllEmployeeUseCase } from '../use-cases/get-all-employee-use-case';
import { UpdateEmployeeUseCase } from '../use-cases/update-employee-use-case';
import { EmployeeToSave } from '@/domain/employee/types';
import { EmployeeDTO } from '../employee-dto';
import { GetEmployeeUseCase } from '../use-cases/get-employee-use-case';

export class EmployeeService implements IEmployeeService {
  createEmployeeUseCase: CreateEmployeeUseCase;
  deleteEmployeeUseCase: DeleteEmployeeUseCase;
  getAllEmployeeUseCase: GetAllEmployeeUseCase;
  updateEmployeeUseCase: UpdateEmployeeUseCase;
  getEmployeeUseCase: GetEmployeeUseCase;

  constructor(employeeRepository: IEmployeeRepository) {
    this.createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
    this.deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepository);
    this.getAllEmployeeUseCase = new GetAllEmployeeUseCase(employeeRepository);
    this.updateEmployeeUseCase = new UpdateEmployeeUseCase(employeeRepository);
    this.getEmployeeUseCase = new GetEmployeeUseCase(employeeRepository);
  }

  create(employee: EmployeeToSave): Promise<EmployeeDTO> {
    return this.createEmployeeUseCase.execute(employee);
  }

  delete(employeeId: number): Promise<void> {
    return this.deleteEmployeeUseCase.execute(employeeId);
  }

  getAll(): Promise<EmployeeDTO[]> {
    return this.getAllEmployeeUseCase.execute();
  }

  getById(employeeId: number): Promise<EmployeeDTO> {
    return this.getEmployeeUseCase.execute(employeeId);
  }

  update(projectId: number, project: EmployeeToSave): Promise<EmployeeDTO> {
    return this.updateEmployeeUseCase.execute(projectId, project);
  }
}
