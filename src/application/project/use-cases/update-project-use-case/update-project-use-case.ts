import { UseCase } from '@/application/types';
import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { UpdateProjectDTO } from './update-project-dto';
import { ProjectView } from '../../project-view';
import { IProjectMapper } from '../../mappers/project-mapper.interface';
import { UniqueEntityID } from '@/domain/core/unique-entity-id';
import { Employees } from '@/domain/employee/employees';
import { ProjectName } from '@/domain/project/value-objects/project-name';

export class UpdateProjectUseCase
  implements UseCase<[UpdateProjectDTO], ProjectView>
{
  constructor(private readonly projectRepository: IProjectRepository, private readonly projectMapper: IProjectMapper) {}

  async execute(
    updateProjectDTO: UpdateProjectDTO
  ): Promise<ProjectView> {
    const project = this.projectMapper.toDomain({
      id: updateProjectDTO.id,
      employees: [],
      name: updateProjectDTO.name,
    })
    
    const updatedProject = await this.projectRepository.update(project);

    return this.projectMapper.toView(updatedProject);
  }
}
