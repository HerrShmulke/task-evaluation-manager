import { Project } from '@/domain/project/project';
import { EmployeeDTO } from '../employee/employee-dto';

export class ProjectDTO {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly employees: EmployeeDTO[]
  ) {}

  static fromDomain(project: Project) {
    return new ProjectDTO(
      project.properties.id,
      project.properties.name,
      project.properties.employees
    );
  }
}
