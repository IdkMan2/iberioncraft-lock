import {StorageController} from "./storage-controller";

export class StorageInLocal implements StorageController<string> {
  private localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  getItem(key: string, fallback?: string): string | undefined {
    const val = this.localStorage.getItem(key);
    if(val) {
      return val;
    } else {
      return fallback ? fallback : undefined;
    }
  }
  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }
  isItemSet(key: string): boolean {
    return this.localStorage.getItem(key) !== undefined;
  }
  unsetItem(key: string): void {
    this.localStorage.removeItem(key);
  }
  clearItems(): void {
    this.localStorage.clear();
  }

}