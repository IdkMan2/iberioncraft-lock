export interface pluckTBase {
  [key: string]: any
}

export const pluck = <T extends pluckTBase>(arr: T[], key: string): any => {
  const arrLen = arr.length;
  const elements: T[] = [];
  for(let i=0; i<arrLen; i++) {
    const item = arr[i];
    elements.push(item[key]);
  }
  return elements;
};