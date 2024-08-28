import { ProjectToSave } from '@/domain/project/types';
import { UseCase } from '../../types';
import { ProjectDTO } from '../project-dto';
import { IProjectRepository } from '@/domain/project/repository/project-repository';

export class CreateProjectUseCase
  implements UseCase<[ProjectToSave], ProjectDTO>
{
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(form: ProjectToSave): Promise<ProjectDTO> {
    const project = await this.projectRepository.create(form);

    return ProjectDTO.fromDomain(project);
  }
}
