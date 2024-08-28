import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { CreateProjectUseCase } from '../use-cases/create-project-use-case';
import { ProjectToSave } from '@/domain/project/types';
import { IProjectService } from './project-service.interface';
import { ProjectDTO } from '../project-dto';
import { GetAllProjectsUseCase } from '../use-cases/get-all-projects-use-case';
import { GetProjectUseCase } from '../use-cases/get-project-use-case';
import { DeleteProjectUseCase } from '../use-cases/delete-project-use-case';
import { UpdateProjectUseCase } from '../use-cases/update-project-use-case';

export class ProjectService implements IProjectService {
  private readonly createProjectUseCase: CreateProjectUseCase;
  private readonly getAllProjectsUseCase: GetAllProjectsUseCase;
  private readonly getProjectUseCase: GetProjectUseCase;
  private readonly deleteProjectUseCase: DeleteProjectUseCase;
  private readonly updateProjectUseCase: UpdateProjectUseCase;

  constructor(projectRepository: IProjectRepository) {
    this.createProjectUseCase = new CreateProjectUseCase(projectRepository);
    this.getAllProjectsUseCase = new GetAllProjectsUseCase(projectRepository);
    this.getProjectUseCase = new GetProjectUseCase(projectRepository);
    this.deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);
    this.updateProjectUseCase = new UpdateProjectUseCase(projectRepository);
  }

  create(project: ProjectToSave) {
    return this.createProjectUseCase.execute(project);
  }

  getAll(): Promise<ProjectDTO[]> {
    return this.getAllProjectsUseCase.execute();
  }

  getById(projectId: number): Promise<ProjectDTO> {
    return this.getProjectUseCase.execute(projectId);
  }

  delete(projectId: number): Promise<void> {
    return this.deleteProjectUseCase.execute(projectId);
  }

  update(projectId: number, project: ProjectToSave): Promise<ProjectDTO> {
    return this.updateProjectUseCase.execute(projectId, project);
  }
}
