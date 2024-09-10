import { UseCase } from '@/application/types';
import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { ProjectView } from '../../project-view';
import { IProjectMapper } from '../../mappers/project-mapper.interface';

export class GetProjectsUseCase implements UseCase<[void], ProjectView[]> {
  constructor(private readonly projectRepository: IProjectRepository, private readonly projectMapper: IProjectMapper) {}

  async execute(): Promise<ProjectView[]> {
    const projects = await this.projectRepository.getAll();

    return projects.map((project) => this.projectMapper.toView(project));
  }
}
