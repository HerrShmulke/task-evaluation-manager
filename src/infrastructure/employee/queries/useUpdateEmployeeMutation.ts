import { useMutation } from "@tanstack/vue-query";
import { employeeQueryKey } from "../constants";
import { inject } from "vue";
import { injectionKeys } from "@/configuration/provide/injection-keys";
import { AddId } from "@/infrastructure/types";
import { EmployeeToSave } from "@/domain/employee/types";

export function useUpdateEmployeeMutation() {
  const employeeService = inject(injectionKeys.employeeService)!;

  return useMutation({
    mutationKey: [employeeQueryKey],
    mutationFn: (employee: AddId<EmployeeToSave>) => employeeService.update(employee.id, employee),
  });
}