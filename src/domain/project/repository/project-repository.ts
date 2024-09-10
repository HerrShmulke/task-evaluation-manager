import { Project } from '../project';
import { ProjectProperties } from '../project.properties';

export interface IProjectRepository {
  getById(projectId: number): Promise<Project>;
  getAll(): Promise<Project[]>;
  create(toSave: ProjectProperties): Promise<Project>;
  update(project: Project): Promise<Project>;
  delete(projectId: number): Promise<void>;
}
