export interface IRoute<T extends object> {
  name: string;
  params: T;
}
