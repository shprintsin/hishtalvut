import { useMemo } from 'react';




export const SetArray = (array, property) => {
  return useMemo(() => Array.from(new Set(array.map(item => item[property]))), [array]);
};
