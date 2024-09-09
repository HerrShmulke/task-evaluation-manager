import { IErrorHandler } from './error-handler.interface';

export class ErrorHandler implements IErrorHandler {
  private nextHandler?: IErrorHandler;

  public setNext(handler: IErrorHandler) {
    this.nextHandler = handler;

    return handler;
  }

  public handle(error: Error): Error {
    if (this.nextHandler !== undefined) {
      return this.nextHandler.handle(error);
    }

    return new Error('Неизвестная ошибка');
  }
}
