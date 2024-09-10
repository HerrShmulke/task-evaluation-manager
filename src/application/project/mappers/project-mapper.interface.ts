import { Project } from "@/domain/project/project";
import { ProjectView } from "../project-view";
import { IMapper } from "@/application/mapper";

export interface IProjectMapper extends IMapper<Project, ProjectView> {}