import { UseCase } from '@/application/types';
import { ProjectDTO } from '../project-dto';
import { ProjectToSave } from '@/domain/project/types';
import { IProjectRepository } from '@/domain/project/repository/project-repository';

export class UpdateProjectUseCase
  implements UseCase<[number, ProjectToSave], ProjectDTO>
{
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(
    projectId: number,
    project: ProjectToSave
  ): Promise<ProjectDTO> {
    const updatedProject = await this.projectRepository.update(
      projectId,
      project
    );

    return ProjectDTO.fromDomain(updatedProject);
  }
}
