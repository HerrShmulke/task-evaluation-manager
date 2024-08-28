import { Project } from "@/domain/project/project";

export class ProjectDTO {
  constructor(
    public readonly id: number,
    public readonly name: string
  ) { }

  static fromDomain(project: Project) {
    return new ProjectDTO(project.properties.id, project.properties.name);
  }
}