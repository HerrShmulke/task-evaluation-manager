import { Entity } from '../core/entity';
import { UniqueEntityID } from '../core/unique-entity-id';
import { TaskProperties } from './task.properties';

export class Task extends Entity<TaskProperties> {
  private constructor(props: TaskProperties, id: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: TaskProperties, id: UniqueEntityID) {
    return new Task(props, id);
  }
}
