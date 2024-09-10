import { IProjectMapper } from "@/application/project/mappers/project-mapper.interface";
import { IProjectService } from "@/application/project/services/project-service.interface";
import { IProjectRepository } from "@/domain/project/repository/project-repository";
import { interfaces } from "inversify";

export const projectKeys = {
  projectService: Symbol(
    'projectService',
  ) as interfaces.ServiceIdentifier<IProjectService>,
  projectMapper: Symbol('projectMapper') as interfaces.ServiceIdentifier<IProjectMapper>,
  projectRepository: Symbol('projectRepository') as interfaces.ServiceIdentifier<IProjectRepository>
}