import { EmployeeView } from '../employee/employee-view';

export interface ProjectView {
  id: number;
  name: string;
  employees: EmployeeView[];
}
