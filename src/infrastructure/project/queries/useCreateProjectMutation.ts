import { useMutation } from '@tanstack/vue-query';
import { projectQueryKey } from '../constants';
import { inject } from 'vue';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { ProjectToSave } from '@/domain/project/types';

export function useCreateProjectMutation() {
  const projectService = inject(injectionKeys.projectService)!;

  return useMutation({
    mutationKey: [projectQueryKey],
    mutationFn: (project: ProjectToSave) => projectService.create(project)
  });
}
