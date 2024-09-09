export interface IErrorHandler {
  setNext(handler: IErrorHandler): void;

  handle(error: Error): Error;
}
