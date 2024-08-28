import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { UseCase } from '@/application/types';

export class DeleteProjectUseCase implements UseCase<[number], void> {
  constructor(private readonly projectRepository: IProjectRepository) {}

  execute(projectId: number): Promise<void> {
    return this.projectRepository.delete(projectId);
  }
}
