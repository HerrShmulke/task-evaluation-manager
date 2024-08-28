import { Project } from '@/domain/project/project';
import { IProjectRepository } from '@/domain/project/repository/project-repository';
import { ProjectProperties, ProjectToSave } from '@/domain/project/types';
import { ApiProject } from './api-project';
import { orderBy } from 'lodash-es';

export class ProjectResource implements IProjectRepository {
  private lastId: number;
  private key = 'projects';
  private lastIdKey = 'projects:last-id';

  constructor() {
    const storageLastId = Number(localStorage.getItem(this.lastIdKey) ?? '0');
    this.lastId = storageLastId;
  }

  create(project: ProjectToSave): Promise<Project> {
    const projectObject: ProjectProperties = {
      id: this.lastId++,
      name: project.name
    };

    localStorage.setItem(this.lastIdKey, `${this.lastId}`);

    const projectsList = JSON.parse(
      localStorage.getItem(this.key) ?? '[]'
    ) as ApiProject[];

    projectsList.push(projectObject);
    localStorage.setItem(this.key, JSON.stringify(projectsList));

    return Promise.resolve(
      Project.fromProperties({
        id: projectObject.id,
        name: projectObject.name
      })
    );
  }

  getAll(): Promise<Project[]> {
    const apiProjects = orderBy(
      JSON.parse(localStorage.getItem(this.key) ?? '[]') as ApiProject[],
      ['id'],
      ['desc']
    );

    return Promise.resolve(
      apiProjects.map((apiProject) => Project.fromProperties(apiProject))
    );
  }

  async getById(id: number): Promise<Project> {
    const allProjects = this.getApiAll();
    const foundProject = allProjects.find((project) => project.id === id);

    if (foundProject === undefined) {
      throw new Error('Project not found');
    }

    return Project.fromProperties(foundProject);
  }

  async update(projectId: number, project: ProjectToSave): Promise<Project> {
    const allProjects = this.getApiAll();

    const index = allProjects.findIndex(
      (findProject) => findProject.id === projectId
    );

    allProjects[index] = {
      id: projectId,
      name: project.name
    };

    localStorage.setItem(this.key, JSON.stringify(allProjects));

    return Project.fromProperties({
      id: projectId,
      name: project.name
    });
  }

  async delete(id: number) {
    const allProjects = this.getApiAll();

    const filteredProjects = allProjects.filter((project) => project.id !== id);

    localStorage.setItem(this.key, JSON.stringify(filteredProjects));
  }

  private getApiAll(): ApiProject[] {
    const apiProjects = orderBy(
      JSON.parse(localStorage.getItem(this.key) ?? '[]') as ApiProject[],
      ['id'],
      ['desc']
    );

    return apiProjects;
  }
}
