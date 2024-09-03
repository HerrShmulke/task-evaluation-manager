import { ApiProject } from '../project/api-project';

export interface ApiEmployee {
  id: number;
  fullName: string;
  projects: ApiProject[];
}
