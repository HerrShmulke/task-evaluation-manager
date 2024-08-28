import { injectionKeys } from '@/configuration/provide/injection-keys';
import { projectQueryKey } from '../constants';
import { useQuery } from '@tanstack/vue-query';
import { inject, MaybeRef, unref } from 'vue';

export function useProjectQuery(id: MaybeRef<number>) {
  const projectService = inject(injectionKeys.projectService)!;

  return useQuery({
    queryKey: [projectQueryKey, id],
    queryFn: () => projectService.getById(unref(id))
  });
}
