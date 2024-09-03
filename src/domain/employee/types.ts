import { ProjectProperties } from '../project/types';

export type EmployeeProperties = {
  id: number;
  fullName: string;
  projects: ProjectProperties[];
};

export type EmployeeToSave = Omit<EmployeeProperties, 'id'>;
