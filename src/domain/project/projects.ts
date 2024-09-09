import { WatchedList } from '../core/watched-list';
import { Project } from './project';

export class Projects extends WatchedList<Project> {
  private constructor(initialProjects: Project[]) {
    super(initialProjects);
  }

  public override compareItems(a: Project, b: Project): boolean {
    return a.equals(b);
  }

  public static create(initialProjects?: Project[]): Projects {
    return new Projects(initialProjects ?? []);
  }
}
