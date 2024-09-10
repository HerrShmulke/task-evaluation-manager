import { ValueObject } from '@/domain/core/value-object';
import { ProjectNameProperties } from './project-name.properties';

export class ProjectName extends ValueObject<ProjectNameProperties> {
  public get value() {
    return this.props.value;
  }

  public static create(projectName: string) {
    // @todo Добавить проверки

    return new ProjectName({
      value: projectName,
    });
  }

  private constructor(props: ProjectNameProperties) {
    super(props);
  }
}
