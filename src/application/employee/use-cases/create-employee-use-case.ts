import { UseCase } from '@/application/types';
import { EmployeeDTO } from '../employee-dto';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { EmployeeToSave } from '@/domain/employee/types';

export class CreateEmployeeUseCase
  implements UseCase<[EmployeeToSave], EmployeeDTO>
{
  constructor(private readonly employeeRepository: IEmployeeRepository) {}

  async execute(newEmployee: EmployeeToSave): Promise<EmployeeDTO> {
    const domain = await this.employeeRepository.create(newEmployee);

    return EmployeeDTO.fromDomain(domain);
  }
}
