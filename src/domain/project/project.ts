import { Entity } from '../core/entity';
import { UniqueEntityID } from '../core/unique-entity-id';
import { Employee } from '../employee/employee';
import { ProjectProperties } from './project.properties';

export class Project extends Entity<ProjectProperties> {
  public get id() {
    return this._id.value;
  }

  public get name() {
    return this.props.name.value;
  }

  public get employees() {
    return this.props.employees.currentItems;
  }

  private constructor(props: ProjectProperties, id: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ProjectProperties, id: UniqueEntityID): Project {
    const defaultValues: ProjectProperties = {
      ...props,
    };

    return new Project(defaultValues, id);
  }

  public addEmployee(employee: Employee) {
    if (this.props.employees === undefined) return;
    if (this.props.employees.exists(employee)) return;

    this.props.employees.add(employee);
  }
}
