import { UseCase } from '@/application/types';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { UpdateEmployeeDTO } from './update-employee-dto';
import { EmployeeView } from '../../employee-view';
import { IMapper } from '@/application/mapper';
import { Employee } from '@/domain/employee/employee';

export class UpdateEmployeeUseCase
  implements UseCase<[UpdateEmployeeDTO], EmployeeView>
{
  public constructor(
    private readonly employeeRepository: IEmployeeRepository,
    private readonly employeeMapper: IMapper<Employee, EmployeeView>
  ) {}

  public async execute(
    updateEmployeeDTO: UpdateEmployeeDTO
  ): Promise<EmployeeView> {
    const domainEmployee = this.employeeMapper.toDomain({
      fullName: updateEmployeeDTO.fullName,
      id: updateEmployeeDTO.id,
      inaccuracy: updateEmployeeDTO.inaccuracy,
      projects: updateEmployeeDTO.projects,
    });

    const domain = await this.employeeRepository.update(domainEmployee);

    return this.employeeMapper.toView(domain);
  }
}
