import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { IEmployeeService } from './employee-service.interface';
import { CreateEmployeeUseCase } from '../use-cases/create-employee-use-case/create-employee-use-case';
import { DeleteEmployeeUseCase } from '../use-cases/delete-employee-use-case/delete-employee-use-case';
import { GetEmployeesUseCase } from '../use-cases/get-employees-use-case/get-employees-use-case';
import { UpdateEmployeeUseCase } from '../use-cases/update-employee-use-case/update-employee-use-case';
import { GetEmployeeUseCase } from '../use-cases/get-employee-use-case/get-employee-use-case';
import { EmployeeMapper } from '../mappers/employee-mapper';
import { CreateEmployeeDTO } from '../use-cases/create-employee-use-case/create-employee-dto';
import { DeleteEmployeeDTO } from '../use-cases/delete-employee-use-case/delete-employee-dto';
import { EmployeeView } from '../employee-view';
import { GetEmployeeDTO } from '../use-cases/get-employee-use-case/get-employee-dto';
import { UpdateEmployeeDTO } from '../use-cases/update-employee-use-case/update-employee-dto';
import { injectable, inject } from 'inversify';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { IErrorHandler } from '@/application/error-handler.interface';
import { EmployeeFullNameEmptyErrorHandler } from '../error-handlers/employee-full-name-empty-error-handler';

@injectable()
export class EmployeeService implements IEmployeeService {
  private createEmployeeUseCase: CreateEmployeeUseCase;
  private deleteEmployeeUseCase: DeleteEmployeeUseCase;
  private getEmployeesUseCase: GetEmployeesUseCase;
  private updateEmployeeUseCase: UpdateEmployeeUseCase;
  private getEmployeeUseCase: GetEmployeeUseCase;
  private errorHandler: IErrorHandler;

  public constructor(
    @inject(injectionKeys.employee.employeeRepository)
    employeeRepository: IEmployeeRepository
  ) {
    this.errorHandler = new EmployeeFullNameEmptyErrorHandler();
    const employeeMapper = new EmployeeMapper();

    this.createEmployeeUseCase = new CreateEmployeeUseCase(
      employeeRepository,
      employeeMapper
    );

    this.deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepository);

    this.getEmployeesUseCase = new GetEmployeesUseCase(
      employeeRepository,
      employeeMapper
    );

    this.updateEmployeeUseCase = new UpdateEmployeeUseCase(
      employeeRepository,
      employeeMapper
    );

    this.getEmployeeUseCase = new GetEmployeeUseCase(
      employeeRepository,
      employeeMapper
    );
  }
  public update(updateEmployeeDTO: UpdateEmployeeDTO): Promise<EmployeeView> {
    try {
      return this.updateEmployeeUseCase.execute(updateEmployeeDTO);
    } catch (error) {
      if (error instanceof Error) {
        throw this.errorHandler.handle(error);
      }

      console.error('Exception is not an instance of error');
      throw new Error('Незивестная ошибка');
    }
  }
  public getById(getEmployeeDTO: GetEmployeeDTO): Promise<EmployeeView> {
    try {
      return this.getEmployeeUseCase.execute(getEmployeeDTO);
    } catch (error) {
      if (error instanceof Error) {
        throw this.errorHandler.handle(error);
      }

      console.error('Exception is not an instance of error');
      throw new Error('Незивестная ошибка');
    }
  }
  public getAll(): Promise<EmployeeView[]> {
    try {
      return this.getEmployeesUseCase.execute();
    } catch (error) {
      if (error instanceof Error) {
        throw this.errorHandler.handle(error);
      }

      console.error('Exception is not an instance of error');
      throw new Error('Незивестная ошибка');
    }
  }

  public create(createEmployeeDTO: CreateEmployeeDTO): Promise<EmployeeView> {
    try {
      return this.createEmployeeUseCase.execute(createEmployeeDTO);
    } catch (error) {
      if (error instanceof Error) {
        throw this.errorHandler.handle(error);
      }

      console.error('Exception is not an instance of error');
      throw new Error('Незивестная ошибка');
    }
  }

  public delete(deleteEmployeeDTO: DeleteEmployeeDTO): Promise<void> {
    try {
      return this.deleteEmployeeUseCase.execute(deleteEmployeeDTO);
    } catch (error) {
      if (error instanceof Error) {
        throw this.errorHandler.handle(error);
      }

      console.error('Exception is not an instance of error');
      throw new Error('Незивестная ошибка');
    }
  }
}
