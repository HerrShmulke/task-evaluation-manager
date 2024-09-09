import { UniqueEntityID } from '../core/unique-entity-id';
import { TaskDifficultyFactor } from './value-objects/task-difficulty-factor';

export interface TaskProperties {
  difficultyFactor: TaskDifficultyFactor;
  employeeId: UniqueEntityID;
  projectId: UniqueEntityID;
}
