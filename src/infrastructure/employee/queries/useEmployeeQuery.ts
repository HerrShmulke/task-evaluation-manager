import { injectionKeys } from '@/configuration/provide/injection-keys';
import { employeeQueryKey } from '../constants';
import { useQuery } from '@tanstack/vue-query';
import { inject, MaybeRef, unref } from 'vue';

export function useEmployeeQuery(id: MaybeRef<number>) {
  const employeeService = inject(injectionKeys.employeeService)!;

  return useQuery({
    queryKey: [employeeQueryKey, id],
    queryFn: () => employeeService.getById(unref(id))
  });
}
