import { ProjectProperties } from './types';

export class Project {
  private constructor(
    private readonly id: number,
    private readonly name: string
  ) {}

  static fromProperties(properties: ProjectProperties): Project {
    return new Project(properties.id, properties.name);
  }

  get properties(): ProjectProperties {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
