export class InvalidIdValueError extends Error {
  public constructor() {
    super('ID value cannot be less than 0');
  }
}
