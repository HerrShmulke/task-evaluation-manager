import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { employeeQueryKey } from '../constants';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { inject } from 'vue';
import { EmployeeDTO } from '@/application/employee/employee-dto';

export function useDeleteEmployeeMutation() {
  const employeeService = inject(injectionKeys.employeeService)!;
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [employeeQueryKey],
    mutationFn: (employee: EmployeeDTO) => {
      if (employee.id !== undefined) {
        return employeeService.delete(employee.id);
      }

      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [employeeQueryKey]
      });
    }
  });
}
