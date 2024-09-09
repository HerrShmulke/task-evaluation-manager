import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { employeeQueryKey } from '../constants';
import { container } from '@/configuration/provide/container';
import { IEmployeeService } from '@/application/employee/services/employee-service.interface';
import { DeleteEmployeeDTO } from '@/application/employee/use-cases/delete-employee-use-case/delete-employee-dto';
import { injectionKeys } from '@/configuration/provide/injection-keys';

export function useDeleteEmployeeMutation() {
  const employeeService = container.get<IEmployeeService>(
    injectionKeys.employee.employeeService
  );
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [employeeQueryKey],
    mutationFn: (employee: DeleteEmployeeDTO) => {
      if (employee.id !== undefined) {
        return employeeService.delete(employee);
      }

      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [employeeQueryKey],
      });
    },
  });
}
