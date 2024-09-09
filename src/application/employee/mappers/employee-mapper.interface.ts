import { IMapper } from '@/application/mapper';
import { Employee } from '@/domain/employee/employee';
import { EmployeeView } from '../employee-view';

export interface IEmployeeMapper extends IMapper<Employee, EmployeeView> {}
