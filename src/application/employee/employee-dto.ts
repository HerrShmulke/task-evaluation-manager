import { Employee } from '@/domain/employee/employee';

export class EmployeeDTO {
  constructor(
    public readonly id: number,
    public readonly fullName: string
  ) {}

  static fromDomain(employee: Employee) {
    return new EmployeeDTO(
      employee.properties.id,
      employee.properties.fullName
    );
  }
}
