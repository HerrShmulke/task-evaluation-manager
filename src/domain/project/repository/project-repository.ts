import { Project } from "../project";
import { ProjectToSave } from "../types";

export interface IProjectRepository {
  getById(projectId: number): Promise<Project>;
  getAll(): Promise<Project[]>;
  create(toSave: ProjectToSave): Promise<Project>;
  update(projectId: number, toSave: ProjectToSave): Promise<Project>;
  delete(projectId: number): Promise<void>;
}