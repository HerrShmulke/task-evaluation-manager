import { UseCase } from "@/application/types";
import { IEmployeeRepository } from "@/domain/employee/repository/employee-repository";
import { EmployeeDTO } from "../employee-dto";

export class GetEmployeeUseCase implements UseCase<[number], EmployeeDTO> {
  constructor(private readonly employeeRepository: IEmployeeRepository) { }

  async execute(employeeId: number): Promise<EmployeeDTO> {
    const domain = await this.employeeRepository.getById(employeeId);

    return EmployeeDTO.fromDomain(domain);
  }
}