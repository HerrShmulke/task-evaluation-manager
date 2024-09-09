import { Employee } from '@/domain/employee/employee';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { orderBy } from 'lodash-es';
import { EmployeeProperties } from '@/domain/employee/employee.properties';
import { ApiEmployee } from './api-employee';
import { EmployeeFullName } from '@/domain/employee/value-objects/employee-full-name';
import { EmployeeInaccuracy } from '@/domain/employee/value-objects/employee-inaccuracy';
import { UniqueEntityID } from '@/domain/core/unique-entity-id';
import { ArrayStorageService } from '@/infrastructure/services/storage-service/array-storage-service';
import { StorageService } from '@/infrastructure/services/storage-service/storage-service';
import { inject, injectable } from 'inversify';
import { IEmployeeMapper } from '@/application/employee/mappers/employee-mapper.interface';
import { injectionKeys } from '@/configuration/provide/injection-keys';

@injectable()
export class EmployeeRepository implements IEmployeeRepository {
  private lastId: number;
  private employeesLocalStorage = new ArrayStorageService<ApiEmployee>(
    'employees'
  );
  private lastIdStorage = new StorageService<number, number>(
    'employees:last-id',
    0
  );

  public constructor(
    @inject(injectionKeys.employee.employeeMapper)
    private readonly employeeMapper: IEmployeeMapper
  ) {
    const storageLastId = this.lastIdStorage.get();
    this.lastId = storageLastId;
  }

  public async create(employee: EmployeeProperties): Promise<Employee> {
    const employeeObject: ApiEmployee = {
      id: this.lastId++,
      fullName: employee.fullName.value,
      inaccuracy: employee.inaccuracy.value,
    };

    this.lastIdStorage.set(this.lastId);

    this.employeesLocalStorage.push(employeeObject);

    const fullName = EmployeeFullName.create(employeeObject.fullName);
    const inaccuracy = EmployeeInaccuracy.create(employeeObject.inaccuracy);

    const projectId = UniqueEntityID.create(employeeObject.id);

    return Promise.resolve(
      Employee.create(
        {
          fullName,
          inaccuracy,
        },
        projectId
      )
    );
  }

  public async getAll(): Promise<Employee[]> {
    const apiEmployees = orderBy(
      this.employeesLocalStorage.getAll(),
      ['id'],
      ['desc']
    );

    const apiEmployeesWithProjects = apiEmployees.map<ApiEmployee>(
      (apiEmployee) => {
        return {
          fullName: apiEmployee.fullName,
          id: apiEmployee.id,
          inaccuracy: apiEmployee.inaccuracy,
        };
      }
    );

    return Promise.all(
      apiEmployeesWithProjects.map((apiEmployee) =>
        this.employeeMapper.toDomain({
          fullName: apiEmployee.fullName,
          id: apiEmployee.id,
          inaccuracy: apiEmployee.inaccuracy,
        })
      )
    );
  }

  public async getById(employeeId: number): Promise<Employee> {
    const allEmployees = this.getApiAll();
    const foundEmployee = allEmployees.find(
      (employee) => employee.id === employeeId
    );

    if (foundEmployee === undefined) {
      throw new Error('Employee not found');
    }

    return this.employeeMapper.toDomain({
      fullName: foundEmployee.fullName,
      id: foundEmployee.id,
      inaccuracy: foundEmployee.inaccuracy,
    });
  }

  public async update(employee: Employee): Promise<Employee> {
    this.employeesLocalStorage.update(
      (findEmployee) => findEmployee.id === employee.id,
      {
        fullName: employee.fullName,
        id: employee.id,
        inaccuracy: employee.inaccuracy,
      }
    );

    return this.getById(employee.id);
  }

  public async delete(id: number) {
    this.employeesLocalStorage.remove((item) => item.id === id);
  }

  private getApiAll(): ApiEmployee[] {
    const apiEmployees = orderBy(
      this.employeesLocalStorage.getAll(),
      ['id'],
      ['desc']
    );

    return apiEmployees;
  }
}
