import { UseCase } from '@/application/types';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { EmployeeView } from '../../employee-view';
import { IMapper } from '@/application/mapper';
import { Employee } from '@/domain/employee/employee';
import { CreateEmployeeDTO } from './create-employee-dto';
import { EmployeeFullName } from '@/domain/employee/value-objects/employee-full-name';
import { EmployeeInaccuracy } from '@/domain/employee/value-objects/employee-inaccuracy';

export class CreateEmployeeUseCase
  implements UseCase<[CreateEmployeeDTO], EmployeeView>
{
  public constructor(
    private readonly employeeRepository: IEmployeeRepository,
    private readonly employeeMapper: IMapper<Employee, EmployeeView>
  ) {}

  public async execute(newEmployee: CreateEmployeeDTO): Promise<EmployeeView> {
    const fullName = EmployeeFullName.create(newEmployee.fullName);
    const inaccuracy = EmployeeInaccuracy.create(newEmployee.inaccuracy);

    const domain = await this.employeeRepository.create({
      fullName,
      inaccuracy,
    });

    return this.employeeMapper.toView(domain);
  }
}
