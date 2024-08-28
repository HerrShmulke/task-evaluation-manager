import { UseCase } from "@/application/types";
import { ProjectDTO } from "../project-dto";
import { IProjectRepository } from "@/domain/project/repository/project-repository";

export class GetProjectUseCase implements UseCase<[number], ProjectDTO> {
  constructor(
    private readonly projectRepository: IProjectRepository
  ) { }

  async execute(id: number): Promise<ProjectDTO> {
    const project = await this.projectRepository.getById(id);

    return ProjectDTO.fromDomain(project);
  }
}