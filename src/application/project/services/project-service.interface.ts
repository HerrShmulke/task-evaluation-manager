import { ProjectToSave } from "@/domain/project/types";
import { ProjectDTO } from "../project-dto";

export interface IProjectService {
  create(project: ProjectToSave): Promise<ProjectDTO>;
  update(projectId: number, project: ProjectToSave): Promise<ProjectDTO>;
  getById(projectId: number): Promise<ProjectDTO>;
  getAll(): Promise<ProjectDTO[]>;
  delete(projectId: number): Promise<void>;
}