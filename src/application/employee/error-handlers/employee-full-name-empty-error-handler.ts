import { ErrorHandler } from '@/application/error-handler';
import { EmployeeFullNameFieldError } from '../errors/employee-full-name-field-error';

export class EmployeeFullNameEmptyErrorHandler extends ErrorHandler {
  public override handle(error: Error): Error {
    if (error instanceof EmployeeFullNameEmptyErrorHandler) {
      return new EmployeeFullNameFieldError();
    }

    return super.handle(error);
  }
}
