import { WatchedList } from '../core/watched-list';
import { Employee } from './employee';

export class Employees extends WatchedList<Employee> {
  private constructor(initialEmployees: Employee[]) {
    super(initialEmployees);
  }

  public override compareItems(a: Employee, b: Employee): boolean {
    return a.equals(b);
  }

  public static create(initialEmployees?: Employee[]): Employees {
    return new Employees(initialEmployees ?? []);
  }
}
