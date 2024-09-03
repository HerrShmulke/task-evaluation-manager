import { Employee } from '../employee/employee';
import { ProjectProperties } from './types';

export class Project {
  private constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly employees: Employee[]
  ) {}

  static fromProperties(properties: ProjectProperties): Project {
    return new Project(
      properties.id,
      properties.name,
      properties.employees.map((employee) => Employee.fromProperties(employee))
    );
  }

  get properties(): ProjectProperties {
    return {
      id: this.id,
      name: this.name,
      employees: this.employees.map((employee) => ({
        fullName: employee.properties.fullName,
        id: employee.properties.id,
        projects: [],
      })),
    };
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}
