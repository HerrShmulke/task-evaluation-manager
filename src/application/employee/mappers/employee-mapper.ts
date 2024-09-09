import { Employee } from '@/domain/employee/employee';
import { EmployeeView } from '../employee-view';
import { EmployeeFullName } from '@/domain/employee/value-objects/employee-full-name';
import { EmployeeInaccuracy } from '@/domain/employee/value-objects/employee-inaccuracy';
import { UniqueEntityID } from '@/domain/core/unique-entity-id';
import { IEmployeeMapper } from './employee-mapper.interface';
import { injectable } from 'inversify';

@injectable()
export class EmployeeMapper implements IEmployeeMapper {
  public toDomain(view: EmployeeView): Employee {
    const fullName = EmployeeFullName.create(view.fullName);
    const inaccuracy = EmployeeInaccuracy.create(view.inaccuracy);

    return Employee.create(
      {
        fullName,
        inaccuracy,
      },
      UniqueEntityID.create(view.id)
    );
  }

  public toView(domain: Employee): EmployeeView {
    return {
      id: domain.id,
      fullName: domain.fullName,
      inaccuracy: domain.inaccuracy,
    };
  }
}
