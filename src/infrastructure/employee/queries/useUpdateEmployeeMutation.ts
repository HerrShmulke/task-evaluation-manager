import { useMutation } from '@tanstack/vue-query';
import { employeeQueryKey } from '../constants';
import { AddId } from '@/infrastructure/types';
import { container } from '@/configuration/provide/container';
import { IEmployeeService } from '@/application/employee/services/employee-service.interface';
import { UpdateEmployeeDTO } from '@/application/employee/use-cases/update-employee-use-case/update-employee-dto';
import { injectionKeys } from '@/configuration/provide/injection-keys';

export function useUpdateEmployeeMutation() {
  const employeeService = container.get<IEmployeeService>(
    injectionKeys.employee.employeeService
  );

  return useMutation({
    mutationKey: [employeeQueryKey],
    mutationFn: (employee: AddId<UpdateEmployeeDTO>) =>
      employeeService.update(employee),
  });
}
