export class StorageService<T, TDefault = undefined> {
  public constructor(
    private readonly storageKey: string,
    private readonly defaultValue?: TDefault
  ) {}

  public get(): T | TDefault {
    const item = localStorage.getItem(this.storageKey);
    return item ? (JSON.parse(item) as T) : (this.defaultValue as TDefault);
  }

  public set(value: T) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  public clear() {
    localStorage.removeItem(this.storageKey);
  }
}
