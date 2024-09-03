import { ApiEmployee } from '../employee/api-employee';

export interface ApiProject {
  id: number;
  name: string;
  employees: ApiEmployee[];
}
