import { UseCase } from '@/application/types';
import { ProjectDTO } from '../project-dto';
import { IProjectRepository } from '@/domain/project/repository/project-repository';

export class GetAllProjectsUseCase implements UseCase<[void], ProjectDTO[]> {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(): Promise<ProjectDTO[]> {
    const projects = await this.projectRepository.getAll();

    return projects.map((project) => ProjectDTO.fromDomain(project));
  }
}
