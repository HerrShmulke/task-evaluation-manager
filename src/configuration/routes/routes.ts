import { useDefaultLayout } from '@/infrastructure/layouts/useDefaultLayout';
import { getEmployeesRoute } from '@/infrastructure/routes/employees/employees';
import { getEmployeesCreateRoute } from '@/infrastructure/routes/employees/employees-create';
import { getEmployeesEditRoute } from '@/infrastructure/routes/employees/employees-edit';
import { getProjectsRoute } from '@/infrastructure/routes/projects/projects';
import { getProjectsCreateRoute } from '@/infrastructure/routes/projects/projects-create';
import { getProjectsEditRoute } from '@/infrastructure/routes/projects/projects-edit';

export const routes = [
  useDefaultLayout([
    getProjectsCreateRoute(
      () => import('@/presentation/pages/ProjectsCreatePage.vue')
    ),
    getProjectsEditRoute(
      () => import('@/presentation/pages/ProjectsEditPage.vue')
    ),
    getProjectsRoute(() => import('@/presentation/pages/ProjectsPage.vue')),
    getEmployeesRoute(() => import('@/presentation/pages/EmployeesPage.vue')),
    getEmployeesCreateRoute(
      () => import('@/presentation/pages/EmployeesCreatePage.vue')
    ),
    getEmployeesEditRoute(
      () => import('@/presentation/pages/EmployeesEditPage.vue')
    ),
  ]),
] as const;
