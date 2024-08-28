import { useMutation } from "@tanstack/vue-query";
import { projectQueryKey } from "../constants";
import { inject } from "vue";
import { injectionKeys } from "@/configuration/provide/injection-keys";
import { ProjectToSave } from "@/domain/project/types";
import { AddId } from "@/infrastructure/types";

export function useUpdateProjectMutation() {
  const projectService = inject(injectionKeys.projectService)!;

  return useMutation({
    mutationKey: [projectQueryKey],
    mutationFn: (project: AddId<ProjectToSave>) => projectService.update(project.id, project),
  });
}