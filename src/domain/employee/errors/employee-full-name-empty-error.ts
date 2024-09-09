export class EmployeeFullNameEmptyError extends Error {
  public constructor() {
    super('FullName cannot be empty');
  }
}
