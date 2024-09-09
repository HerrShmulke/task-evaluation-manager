import { useMutation } from '@tanstack/vue-query';
import { employeeQueryKey } from '../constants';
import { container } from '@/configuration/provide/container';
import { CreateEmployeeDTO } from '@/application/employee/use-cases/create-employee-use-case/create-employee-dto';
import { injectionKeys } from '@/configuration/provide/injection-keys';

export function useCreateEmployeeMutation() {
  const employeeService = container.get(injectionKeys.employee.employeeService);

  return useMutation({
    mutationKey: [employeeQueryKey],
    mutationFn: (employee: CreateEmployeeDTO) =>
      employeeService.create(employee),
  });
}
