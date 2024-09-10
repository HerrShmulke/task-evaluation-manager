import { UseCase } from '@/application/types';
import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { ProjectView } from '../../project-view';
import { IProjectMapper } from '../../mappers/project-mapper.interface';
import { GetProjectDTO } from './get-project-dto';

export class GetProjectUseCase implements UseCase<[GetProjectDTO], ProjectView> {
  constructor(private readonly projectRepository: IProjectRepository, private readonly projectMapper: IProjectMapper) {}

  async execute(getProjectDTO: GetProjectDTO): Promise<ProjectView> {
    const project = await this.projectRepository.getById(getProjectDTO.projectId);

    return this.projectMapper.toView(project);;
  }
}
