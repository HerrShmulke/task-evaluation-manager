import { UseCase } from "@/application/types";
import { IEmployeeRepository } from "@/domain/employee/repository/employee-repository";

export class DeleteEmployeeUseCase implements UseCase<[number], void> {
  constructor(private readonly employeeRepository: IEmployeeRepository) { }

  execute(employeeId: number): Promise<void> {
    return this.employeeRepository.delete(employeeId);
  }
}