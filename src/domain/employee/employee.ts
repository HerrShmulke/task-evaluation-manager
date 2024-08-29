import { EmployeeProperties } from './types';

export class Employee {
  private constructor(
    private readonly id: number,
    private readonly fullName: string
  ) {}

  static fromProperties(properties: EmployeeProperties): Employee {
    return new Employee(properties.id, properties.fullName);
  }

  get properties(): EmployeeProperties {
    return {
      id: this.id,
      fullName: this.fullName,
    };
  }
}
