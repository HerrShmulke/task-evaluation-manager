export class FieldError extends Error {
  public constructor(
    message: string,
    public readonly field: string
  ) {
    super(message);
  }
}
