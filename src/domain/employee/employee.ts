import { Entity } from '../core/entity';
import { UniqueEntityID } from '../core/unique-entity-id';
import { EmployeeProperties } from './employee.properties';

export class Employee extends Entity<EmployeeProperties> {
  public get id() {
    return this._id.value;
  }

  public get inaccuracy() {
    return this.props.inaccuracy.value;
  }

  public get fullName() {
    return this.props.fullName.value;
  }

  private constructor(props: EmployeeProperties, id: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: EmployeeProperties, id: UniqueEntityID) {
    return new Employee(props, id);
  }
}
