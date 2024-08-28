export type ProjectProperties = {
  id: number;
  name: string;
};

export type ProjectToSave = Omit<ProjectProperties, 'id'>;
