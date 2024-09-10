import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { CreateProjectUseCase } from '../use-cases/create-project-use-case/create-project-use-case';
import { IProjectService } from './project-service.interface';
import { GetProjectsUseCase } from '../use-cases/get-projects-use-case/get-projects-use-case';
import { GetProjectUseCase } from '../use-cases/get-project-use-case/get-project-use-case';
import { DeleteProjectUseCase } from '../use-cases/delete-project-use-case/delete-project-use-case';
import { UpdateProjectUseCase } from '../use-cases/update-project-use-case/update-project-use-case';
import { CreateProjectDTO } from '../use-cases/create-project-use-case/create-project-dto';
import { ProjectView } from '../project-view';
import { GetProjectDTO } from '../use-cases/get-project-use-case/get-project-dto';
import { DeleteProjectDTO } from '../use-cases/delete-project-use-case/delete-project-dto';
import { UpdateProjectDTO } from '../use-cases/update-project-use-case/update-project-dto';
import { inject, injectable } from 'inversify';

@injectable()
export class ProjectService implements IProjectService {
  private readonly createProjectUseCase: CreateProjectUseCase;
  private readonly getAllProjectsUseCase: GetProjectsUseCase;
  private readonly getProjectUseCase: GetProjectUseCase;
  private readonly deleteProjectUseCase: DeleteProjectUseCase;
  private readonly updateProjectUseCase: UpdateProjectUseCase;

  constructor(@inject() projectRepository: IProjectRepository) {
    this.createProjectUseCase = new CreateProjectUseCase(projectRepository);
    this.getAllProjectsUseCase = new GetProjectsUseCase(projectRepository);
    this.getProjectUseCase = new GetProjectUseCase(projectRepository);
    this.deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);
    this.updateProjectUseCase = new UpdateProjectUseCase(projectRepository);
  }

  create(project: CreateProjectDTO) {
    return this.createProjectUseCase.execute(project);
  }

  getAll(): Promise<ProjectView[]> {
    return this.getAllProjectsUseCase.execute();
  }

  getById(getProjectDTO: GetProjectDTO): Promise<ProjectView> {
    return this.getProjectUseCase.execute(getProjectDTO);
  }

  delete(deleteProjectDTO: DeleteProjectDTO): Promise<void> {
    return this.deleteProjectUseCase.execute(deleteProjectDTO);
  }

  update(updateProjectDTO: UpdateProjectDTO): Promise<ProjectView> {
    return this.updateProjectUseCase.execute(updateProjectDTO);
  }
}
