import { ValueObject } from '@/domain/core/value-object';
import { EmployeeFullNameProperties } from './employee-full-name.properties';
import { EmployeeFullNameEmptyError } from '../errors/employee-full-name-empty-error';

export class EmployeeFullName extends ValueObject<EmployeeFullNameProperties> {
  public get value() {
    return this.props.value;
  }

  public static create(fullName?: string) {
    if (fullName === undefined || fullName === null || fullName.length === 0)
      throw new EmployeeFullNameEmptyError();

    return new EmployeeFullName({
      value: fullName,
    });
  }

  private constructor(props: EmployeeFullNameProperties) {
    super(props);
  }
}
