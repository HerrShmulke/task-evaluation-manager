export type EmployeeProperties = {
  id: number;
  fullName: string;
};

export type EmployeeToSave = Omit<EmployeeProperties, 'id'>;
