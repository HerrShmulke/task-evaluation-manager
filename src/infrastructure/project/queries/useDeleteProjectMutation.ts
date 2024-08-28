import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { projectQueryKey } from '../constants';
import { injectionKeys } from '@/configuration/provide/injection-keys';
import { inject } from 'vue';
import { ProjectDTO } from '@/application/project/project-dto';

export function useDeleteProjectMutation() {
  const projectService = inject(injectionKeys.projectService)!;
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [projectQueryKey],
    mutationFn: (project: ProjectDTO) => {
      if (project.id !== undefined) {
        return projectService.delete(project.id);
      }

      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [projectQueryKey]
      });
    }
  });
}
