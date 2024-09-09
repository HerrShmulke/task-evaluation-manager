import { ValueObject } from '@/domain/core/value-object';
import { TaskDifficultyFactorProperties } from './task-difficulty-factor.properties';
import { InvalidDifficultyFactorValueError } from '../errors/invalid-difficulty-factor-value-error';

export class TaskDifficultyFactor extends ValueObject<TaskDifficultyFactorProperties> {
  public get value() {
    return this.props.value;
  }

  public static create(value: number) {
    if (value < 0) throw new InvalidDifficultyFactorValueError();

    return new TaskDifficultyFactor({
      value,
    });
  }

  private constructor(props: TaskDifficultyFactorProperties) {
    super(props);
  }
}
