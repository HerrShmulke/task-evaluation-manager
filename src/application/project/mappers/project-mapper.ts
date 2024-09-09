import { IMapper } from '@/application/mapper';
import { Project } from '@/domain/project/project';
import { ProjectView } from '../project-view';
import { Employee } from '@/domain/employee/employee';
import { EmployeeView } from '@/application/employee/employee-view';
import { Employees } from '@/domain/employee/employees';
import { ProjectName } from '@/domain/project/value-objects/project-name';
import { UniqueEntityID } from '@/domain/core/unique-entity-id';

export class ProjectMapper implements IMapper<Project, ProjectView> {
  public constructor(
    private readonly employeeMapper: IMapper<Employee, EmployeeView>
  ) {}

  public toDomain(view: ProjectView): Project {
    const name = ProjectName.create(view.name);
    const employees = Employees.create(
      view.employees.map((view) => this.employeeMapper.toDomain(view))
    );
    const id = UniqueEntityID.create(view.id);

    return Project.create(
      {
        name,
        employees,
      },
      id
    );
  }

  public toView(domain: Project): ProjectView {
    return {
      id: domain.id,
      name: domain.name,
      employees: domain.employees.map((employee) =>
        this.employeeMapper.toView(employee)
      ),
    };
  }
}
