import { WatchedList } from '../core/watched-list';
import { Task } from './task';

export class Tasks extends WatchedList<Task> {
  private constructor(initialTasks: Task[]) {
    super(initialTasks);
  }

  public override compareItems(a: Task, b: Task): boolean {
    return a.equals(b);
  }

  public static create(initialTasks?: Task[]): Tasks {
    return new Tasks(initialTasks ?? []);
  }
}
