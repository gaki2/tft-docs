import { createContext } from 'react';

export type StackNavigationContextState<T extends string> = {
  stack: T[];
  push: (entry: T) => void;
  pop: (count?: number) => void;
  clear: () => void;
};

export const createStackNavigationContext = <T extends string>() => {
  return createContext<StackNavigationContextState<T>>({
    stack: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    push: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    pop: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clear: () => {},
  });
};
