import { Employee } from '@/domain/employee/employee';
import { ProjectDTO } from '../project/project-dto';

export class EmployeeDTO {
  constructor(
    public readonly id: number,
    public readonly fullName: string,
    public readonly projects: ProjectDTO[]
  ) {}

  static fromDomain(employee: Employee) {
    return new EmployeeDTO(
      employee.properties.id,
      employee.properties.fullName,
      employee.properties.projects
    );
  }
}
