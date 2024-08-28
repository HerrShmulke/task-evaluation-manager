import { UseCase } from "@/application/types";
import { IEmployeeRepository } from "@/domain/employee/repository/employee-repository";
import { EmployeeToSave } from "@/domain/employee/types";
import { EmployeeDTO } from "../employee-dto";

export class UpdateEmployeeUseCase implements UseCase<[number, EmployeeToSave], EmployeeDTO> {
  constructor(private readonly employeeRepository: IEmployeeRepository) { }

  async execute(employeeId: number, employee: EmployeeToSave): Promise<EmployeeDTO> {
    const domain = await this.employeeRepository.update(employeeId, employee);

    return EmployeeDTO.fromDomain(domain);
  }
}