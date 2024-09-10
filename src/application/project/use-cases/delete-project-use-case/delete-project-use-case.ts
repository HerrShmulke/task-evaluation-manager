import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { UseCase } from '@/application/types';
import { DeleteProjectDTO } from './delete-project-dto';

export class DeleteProjectUseCase implements UseCase<[DeleteProjectDTO], void> {
  constructor(private readonly projectRepository: IProjectRepository) {}

  execute(deleteProjectDTO: DeleteProjectDTO): Promise<void> {
    return this.projectRepository.delete(deleteProjectDTO.projectId);
  }
}
