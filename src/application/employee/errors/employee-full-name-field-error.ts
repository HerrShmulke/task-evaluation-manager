import { FieldError } from '@/application/field-error';

export class EmployeeFullNameFieldError extends FieldError {
  public constructor() {
    super('Имя сотрудника не может быть пустым', 'fullName');
  }
}
