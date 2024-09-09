import { UseCase } from '@/application/types';
import { IEmployeeRepository } from '@/domain/employee/repository/employee-repository';
import { DeleteEmployeeDTO } from './delete-employee-dto';

export class DeleteEmployeeUseCase
  implements UseCase<[DeleteEmployeeDTO], void>
{
  public constructor(
    private readonly employeeRepository: IEmployeeRepository
  ) {}

  public execute(deleteEmployeeDTO: DeleteEmployeeDTO): Promise<void> {
    return this.employeeRepository.delete(deleteEmployeeDTO.id);
  }
}
