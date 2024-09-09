import { IEmployeeMapper } from '@/application/employee/mappers/employee-mapper.interface';
import { IEmployeeService } from '@/application/employee/services/employee-service.interface';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { interfaces } from 'inversify';

export const employeeKeys = {
  employeeService: Symbol(
    'employeeService'
  ) as interfaces.ServiceIdentifier<IEmployeeService>,
  employeeRepository: Symbol(
    'employeeRepository'
  ) as interfaces.ServiceIdentifier<IEmployeeRepository>,
  employeeMapper: Symbol(
    'epmloyeeMapper'
  ) as interfaces.ServiceIdentifier<IEmployeeMapper>,
};
