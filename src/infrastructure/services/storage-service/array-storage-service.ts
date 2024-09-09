import { StorageService } from './storage-service';

export class ArrayStorageService<T> {
  private readonly storage;
  public constructor(storageKey: string) {
    this.storage = new StorageService<T[]>(storageKey);
  }

  public getAll(): T[] {
    return this.storage.get() ?? [];
  }

  public push(item: T) {
    const list = this.storage.get() ?? [];

    list.push(item);

    this.storage.set(list);
  }

  public remove(predicate: (item: T) => boolean) {
    const items = this.getAll();
    const index = items.findIndex(predicate);

    if (index !== -1) {
      items.splice(index, 1);
      this.storage.set(items);
    }
  }

  public update(predicate: (item: T) => boolean, updatedItem: T) {
    const items = this.getAll();
    const index = items.findIndex(predicate);

    if (index !== -1) {
      items[index] = updatedItem;
      this.storage.set(items);
    }
  }

  public clear() {
    this.storage.clear();
  }
}
