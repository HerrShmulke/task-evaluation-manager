import { employeeQueryKey } from '../constants';
import { useQuery } from '@tanstack/vue-query';
import { container } from '@/configuration/provide/container';
import { IEmployeeService } from '@/application/employee/services/employee-service.interface';
import { injectionKeys } from '@/configuration/provide/injection-keys';

export function useEmployeesQuery() {
  const employeeService = container.get<IEmployeeService>(
    injectionKeys.employee.employeeService
  );

  return useQuery({
    queryKey: [employeeQueryKey],
    queryFn: () => employeeService.getAll(),
  });
}
