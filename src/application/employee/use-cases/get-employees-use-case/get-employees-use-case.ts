import { UseCase } from '@/application/types';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { EmployeeView } from '../../employee-view';
import { IMapper } from '@/application/mapper';
import { Employee } from '@/domain/employee/employee';

export class GetEmployeesUseCase implements UseCase<[], EmployeeView[]> {
  public constructor(
    private readonly employeeRepository: IEmployeeRepository,
    private readonly employeeMapper: IMapper<Employee, EmployeeView>
  ) {}

  public async execute(): Promise<EmployeeView[]> {
    const domains = await this.employeeRepository.getAll();

    return domains.map((domain) => this.employeeMapper.toView(domain));
  }
}
