import { InvalidIdValueError } from './errors/invalid-id-value-error';
import { ValueObject } from './value-object';

interface UniqueEntityIDProps {
  value: number;
}

export class UniqueEntityID extends ValueObject<UniqueEntityIDProps> {
  public get value() {
    return this.props.value;
  }

  public static create(id: number) {
    if (id < 0) throw new InvalidIdValueError();

    return new UniqueEntityID({
      value: id,
    });
  }

  private constructor(props: UniqueEntityIDProps) {
    super(props);
  }
}
