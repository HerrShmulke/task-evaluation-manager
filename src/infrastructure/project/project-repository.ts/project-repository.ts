import { Project } from "@/domain/project/project";
import { ProjectProperties } from "@/domain/project/project.properties";
import { IProjectRepository } from "@/domain/project/repository/project-repository";
import { ArrayStorageService } from "@/infrastructure/services/storage-service/array-storage-service";
import { inject, injectable } from "inversify";
import { injectionKeys } from "@/configuration/provide/injection-keys";
import { IProjectMapper } from "@/application/project/mappers/project-mapper.interface";
import { ApiProject } from "./api-project";
import { StorageService } from "@/infrastructure/services/storage-service/storage-service";
import { IEmployeeService } from "@/application/employee/services/employee-service.interface";
import { IEmployeeMapper } from "@/application/employee/mappers/employee-mapper.interface";

@injectable()
export class ProjectRepository implements IProjectRepository {
  private readonly projectsStorage = new ArrayStorageService<ApiProject>('projects');
  private readonly keyStorage = new StorageService<number>('projects:key');

  public constructor(
    @inject(injectionKeys.project.projectMapper) private readonly projectMapper: IProjectMapper,
    @inject(injectionKeys.employee.employeeService) private readonly employeeService: IEmployeeService,
    @inject(injectionKeys.employee.employeeMapper) private readonly employeeMapper: IEmployeeMapper,
  ) {}
  
  public async create(toSave: ProjectProperties): Promise<Project> {
    const apiProject: ApiProject = {
      id: this.getNextKey(),
      name: toSave.name.value,
      employeesIds: toSave.employees.currentItems.map((employee) => employee.id)
    }
    
    this.projectsStorage.push(apiProject);

    const employees = await Promise.all(apiProject.employeesIds.map((employeeId) => this.employeeService.getById({ id: employeeId })));

    return Promise.resolve(this.projectMapper.toDomain({
      id: apiProject.id,
      name: apiProject.name,
      employees: employees.map((employee) => this.employeeMapper.toDomain(employee)),
    }));
  }

  delete(projectId: number): Promise<void> {
    
  }

  private getNextKey() {
    const lastKey = this.keyStorage.get() ?? 0;
    
    this.keyStorage.set(lastKey + 1);

    return lastKey;
  }
}