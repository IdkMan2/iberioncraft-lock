
export interface StorageController<K> {
  getItem(key: string, fallback?: K): K | undefined,
  setItem(key: string, value: K): void
  isItemSet(key: string): boolean,
  unsetItem(key: string): void,
  clearItems(): void,
}