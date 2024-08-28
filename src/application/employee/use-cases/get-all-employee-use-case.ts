import { UseCase } from "@/application/types";
import { IEmployeeRepository } from "@/domain/employee/repository/employee-repository";
import { EmployeeDTO } from "../employee-dto";

export class GetAllEmployeeUseCase implements UseCase<[], EmployeeDTO[]> {
  constructor(private readonly employeeRepository: IEmployeeRepository) { }

  async execute(): Promise<EmployeeDTO[]> {
    const domains = await this.employeeRepository.getAll();

    return domains.map(domain => EmployeeDTO.fromDomain(domain));
  }
}