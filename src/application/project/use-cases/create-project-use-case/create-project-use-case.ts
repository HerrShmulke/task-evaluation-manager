import { UseCase } from '../../../types';
import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { ProjectView } from '../../project-view';
import { CreateProjectDTO } from './create-project-dto';
import { IProjectMapper } from '../../mappers/project-mapper.interface';
import { ProjectName } from '@/domain/project/value-objects/project-name';
import { Employees } from '@/domain/employee/employees';

export class CreateProjectUseCase
  implements UseCase<[CreateProjectDTO], ProjectView>
{
  constructor(private readonly projectRepository: IProjectRepository, private readonly projectMapper: IProjectMapper) {}

  async execute(createProjectDTO: CreateProjectDTO): Promise<ProjectView> {
    const name = ProjectName.create(createProjectDTO.name);
    const employees = Employees.create([]);
    
    const project = await this.projectRepository.create({
      name,
      employees,
    });

    return this.projectMapper.toView(project);
  }
}
