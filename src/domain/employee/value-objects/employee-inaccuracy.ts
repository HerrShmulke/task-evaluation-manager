import { ValueObject } from '@/domain/core/value-object';
import { EmployeeInaccuracyProperties } from './employee-inaccuracy.properties';

export class EmployeeInaccuracy extends ValueObject<EmployeeInaccuracyProperties> {
  public get value() {
    return this.props.value;
  }

  public static create(inaccuracy: number) {
    return new EmployeeInaccuracy({
      value: inaccuracy,
    });
  }

  private constructor(props: EmployeeInaccuracyProperties) {
    super(props);
  }
}
