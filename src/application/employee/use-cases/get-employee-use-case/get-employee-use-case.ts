import { UseCase } from '@/application/types';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { IMapper } from '@/application/mapper';
import { Employee } from '@/domain/employee/employee';
import { EmployeeView } from '../../employee-view';
import { GetEmployeeDTO } from './get-employee-dto';

export class GetEmployeeUseCase
  implements UseCase<[GetEmployeeDTO], EmployeeView>
{
  public constructor(
    private readonly employeeRepository: IEmployeeRepository,
    private readonly employeeMapper: IMapper<Employee, EmployeeView>
  ) {}

  public async execute(getEmployeeDTO: GetEmployeeDTO): Promise<EmployeeView> {
    const domain = await this.employeeRepository.getById(getEmployeeDTO.id);

    return this.employeeMapper.toView(domain);
  }
}
