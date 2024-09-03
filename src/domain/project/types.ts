import { EmployeeProperties } from '../employee/types';

export type ProjectProperties = {
  id: number;
  name: string;
  employees: EmployeeProperties[];
};

export type ProjectToSave = Omit<ProjectProperties, 'id'>;
