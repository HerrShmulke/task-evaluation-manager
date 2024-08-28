import { ProjectService } from "@/application/project/services/project-service";
import { injectionKeys } from "./injection-keys";
import { InjectionKey } from "vue";
import { ProjectResource } from "@/infrastructure/project/project-resource";
import { RouteService } from "@/infrastructure/services/route-service/route-service";

type ProvideFn = (key: InjectionKey<unknown>, value: unknown) => void;

export function bindServices(provide: ProvideFn) {
  provide(injectionKeys.projectService, new ProjectService(new ProjectResource()));
  provide(injectionKeys.routeService, new RouteService());
}