import { Employee } from "@/domain/employee/employee";
import { IEmployeeRepository } from "@/domain/employee/repository/employee-repository";
import { EmployeeProperties, EmployeeToSave } from "@/domain/employee/types";
import { ApiEmployee } from "./api-employee";
import { orderBy } from "lodash-es";

export class EmployeeResource implements IEmployeeRepository {
  private lastId: number;
  private key = 'employees';
  private lastIdKey = 'employees:last-id';

  constructor() {
    const storageLastId = Number(localStorage.getItem(this.lastIdKey) ?? '0');
    this.lastId = storageLastId;
  }

  create(employee: EmployeeToSave): Promise<Employee> {
    const employeeObject: EmployeeProperties = {
      id: this.lastId++,
      fullName: employee.fullName
    };

    localStorage.setItem(this.lastIdKey, `${this.lastId}`);

    const employeesList = JSON.parse(localStorage.getItem(this.key) ?? '[]') as ApiEmployee[];

    employeesList.push(employeeObject)
    localStorage.setItem(this.key, JSON.stringify(employeesList));

    return Promise.resolve(Employee.fromProperties({
      id: employeeObject.id,
      fullName: employeeObject.fullName,
    }));
  }

  getAll(): Promise<Employee[]> {
    const apiEmployees = orderBy(
      JSON.parse(localStorage.getItem(this.key) ?? '[]') as ApiEmployee[], ['id'], ['desc']
    )

    return Promise.resolve(
      apiEmployees.map(
        (apiEmployee) => Employee.fromProperties(apiEmployee)
      )
    );
  }

  async getById(employeeId: number): Promise<Employee> {
    const allEmployees = this.getApiAll();
    const foundEmployee = allEmployees.find((employee) => employee.id === employeeId);

    if (foundEmployee === undefined) {
      throw new Error('Employee not found');
    }

    return Employee.fromProperties(foundEmployee);
  }

  async update(employeeId: number, employee: EmployeeToSave): Promise<Employee> {
    const allEmployees = this.getApiAll();

    const index = allEmployees.findIndex((findEmployee) => findEmployee.id === employeeId);

    allEmployees[index] = {
      id: employeeId,
      fullName: employee.fullName
    };

    localStorage.setItem(this.key, JSON.stringify(allEmployees));

    return Employee.fromProperties({
      id: employeeId,
      fullName: employee.fullName
    });
  }

  async delete(id: number) {
    const allEmployees = this.getApiAll();

    const filteredEmployees = allEmployees.filter((employee) => employee.id !== id);

    localStorage.setItem(this.key, JSON.stringify(filteredEmployees));
  }

  private getApiAll(): ApiEmployee[] {
    const apiEmployees = orderBy(
      JSON.parse(localStorage.getItem(this.key) ?? '[]') as ApiEmployee[], ['id'], ['desc']
    )

    return apiEmployees;
  }
}