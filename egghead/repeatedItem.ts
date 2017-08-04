export function repeatedItem<T>(array: T[]): T {
  const set = new Set<T>();
  for (let item of array) {
    if (set.has(item)) {
      return item;
    }
    set.add(item);
  }
  throw new Error('No item repetition');
}

console.log(repeatedItem(['a', 'b', 'c', 'a', 'd', 'e']));