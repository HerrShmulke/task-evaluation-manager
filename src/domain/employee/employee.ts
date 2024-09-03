import { Project } from '../project/project';
import { EmployeeProperties } from './types';

export class Employee {
  private constructor(
    private readonly id: number,
    private readonly fullName: string,
    private readonly projects: Project[]
  ) {}

  static fromProperties(properties: EmployeeProperties): Employee {
    return new Employee(
      properties.id,
      properties.fullName,
      properties.projects.map((project) => Project.fromProperties(project))
    );
  }

  get properties(): EmployeeProperties {
    return {
      id: this.id,
      fullName: this.fullName,
      projects: this.projects.map((project) => ({
        id: project.properties.id,
        name: project.properties.name,
        employees: [],
      })),
    };
  }
}
