import { injectionKeys } from '@/configuration/provide/injection-keys';
import { employeeQueryKey } from '../constants';
import { useQuery } from '@tanstack/vue-query';
import { MaybeRef, unref } from 'vue';
import { container } from '@/configuration/provide/container';

export function useEmployeeQuery(id: MaybeRef<number>) {
  const employeeService = container.get(
    injectionKeys.employee.employeeService
  )!;

  return useQuery({
    queryKey: [employeeQueryKey, id],
    queryFn: () => employeeService.getById({ id: unref(id) }),
  });
}
