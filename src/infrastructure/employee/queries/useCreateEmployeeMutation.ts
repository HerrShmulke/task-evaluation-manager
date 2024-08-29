import { useMutation } from '@tanstack/vue-query';
import { inject } from 'vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { employeeQueryKey } from '../constants';
import { EmployeeToSave } from '@/domain/employee/types';

export function useCreateEmployeeMutation() {
  const employeeService = inject(injectionKeys.employeeService)!;

  return useMutation({
    mutationKey: [employeeQueryKey],
    mutationFn: (employee: EmployeeToSave) => employeeService.create(employee),
  });
}
