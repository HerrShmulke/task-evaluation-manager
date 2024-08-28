import { injectionKeys } from "@/configuration/provide/injection-keys";
import { projectQueryKey } from "../constants";
import { useQuery } from "@tanstack/vue-query";
import { inject } from "vue";

export function useProjectsQuery() {
  const projectService = inject(injectionKeys.projectService)!;

  return useQuery({
    queryKey: [projectQueryKey],
    queryFn: () => projectService.getAll(),
  });
}