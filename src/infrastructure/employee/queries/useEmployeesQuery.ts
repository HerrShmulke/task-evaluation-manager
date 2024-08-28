import { injectionKeys } from "@/configuration/provide/injection-keys";
import { employeeQueryKey } from "../constants";
import { useQuery } from "@tanstack/vue-query";
import { inject } from "vue";

export function useEmployeeQuery() {
  const employeeService = inject(injectionKeys.employeeService)!;

  return useQuery({
    queryKey: [employeeQueryKey],
    queryFn: () => employeeService.getAll(),
  });
}