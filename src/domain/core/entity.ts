import { UniqueEntityID } from './unique-entity-id';

export abstract class Entity<T> {
  public constructor(
    protected props: T,
    protected readonly _id: UniqueEntityID
  ) {}

  public equals(object?: Entity<T>) {
    if (object === null || object === undefined) return false;

    if (this === object) return true;

    if (!this.isEntity(object)) return false;

    return this._id.equals(object._id);
  }

  private isEntity(other: unknown): other is Entity<unknown> {
    return other instanceof Entity;
  }
}
