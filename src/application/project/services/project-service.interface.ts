import { ProjectView } from '../project-view';
import { CreateProjectDTO } from '../use-cases/create-project-use-case/create-project-dto';
import { DeleteProjectDTO } from '../use-cases/delete-project-use-case/delete-project-dto';
import { GetProjectDTO } from '../use-cases/get-project-use-case/get-project-dto';
import { UpdateProjectDTO } from '../use-cases/update-project-use-case/update-project-dto';

export interface IProjectService {
  create(project: CreateProjectDTO): Promise<ProjectView>;
  update(updateProjectDTO: UpdateProjectDTO): Promise<ProjectView>;
  getById(getProjectDTO: GetProjectDTO): Promise<ProjectView>;
  getAll(): Promise<ProjectView[]>;
  delete(deleteProjectDTO: DeleteProjectDTO): Promise<void>;
}
