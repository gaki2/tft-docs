import { PropsWithChildren, ReactElement, useContext, useState } from 'react';
import styled from 'styled-components';
import {
  StackNavigationContextState,
  createStackNavigationContext,
} from './StackNavigationContext';

type CreateStackNavigationProps<T extends string> = {
  /**
   * StackNavigation 에 넣을 수 있는 값 목록
   */
  entries?: readonly [T, ...T[]];
};

/**
 * StackNavigation 컴포넌트를 만드는 함수, `entries`를 지정하면 하위 컴포넌트에서 타입지원을 받을 수 있음
 * `entries`를 지정 하지 않을 시 하위 컴포넌트에서는 다 `string`으로 취급
 *
 * @example
 * const { StackNavigation } = createStackNavigation({ entries: ['miri', 'canvas'] });
 *
 * const Component = () => {
 *   return (
 *    <StackNavigation>
 *      <StackNavigation.Entry value={'miri'}>...</StackNavigation.Entry>
 *                             // ^? OK
 *      <StackNavigation.Entry value={'unicorn'}>...</StackNavigation.Entry>
 *                             // ^? Type 'unicorn' is not assignable to type 'miri' | 'canvas'
 *      <StackNavigation.Trigger>
 *        {({ push }) => <button onClick={
 *          push('miri');       // OK
 *          push('unicorn');    // Type 'unicorn' is not assignable to type 'miri' | 'canvas'
 *        }>...</button>}
 *      </StackNavigation.Trigger>
 *    </StackNavigation>
 *  )
 * }
 * @param entries entry 목록
 */
export const createStackNavigation = <T extends string>({
  entries,
}: CreateStackNavigationProps<T> = {}) => {
  const StackContext = createStackNavigationContext<T>();

  const StackProvider = ({
    children,
    ...props
  }: PropsWithChildren<StackNavigationContextState<T>>) => {
    return <StackContext.Provider value={props}>{children}</StackContext.Provider>;
  };

  const useStackNavigation = () => {
    const context = useContext(StackContext);
    if (!context) {
      throw new Error('StackNavigation 컴포넌트 내부에서 사용해주세요');
    }

    return context;
  };

  type StackNavigationProps<T extends string> = PropsWithChildren<{
    initialStack?: T[];
  }>;
  /**
   * @param children
   * @param initialStack 첫 스택 상태
   */
  const StackNavigation = ({ children, initialStack }: StackNavigationProps<T>) => {
    const [stack, setStack] = useState<T[]>(() => {
      return initialStack || (entries ? [entries[0]] : []);
    });

    const push = (entry: T) => {
      setStack((stack) => stack.concat(entry));
    };

    const pop = (count = 1) => {
      if (stack.length === 0) {
        return;
      }
      setStack((stack) => stack.slice(0, stack.length - count));
    };

    const clear = () => {
      setStack([]);
    };

    return (
      <StackProvider stack={stack} push={push} pop={pop} clear={clear}>
        {children}
      </StackProvider>
    );
  };

  type StackTriggerProps<T extends string> = {
    children: (
      navigate: Pick<StackNavigationContextState<T>, 'push' | 'pop' | 'clear'>
    ) => ReactElement;
  };
  const Trigger = ({ children }: StackTriggerProps<T>) => {
    const { push, pop, clear } = useStackNavigation();

    return children({ push, pop, clear });
  };

  const Entry = ({ value, children, ...props }: PropsWithChildren<{ value: T }>) => {
    const { stack } = useStackNavigation();

    return value === stack.at(-1) ? <_Entry {...props}>{children}</_Entry> : null;
  };

  type DynamicEntryProps<T extends string> = {
    children: (entry: T) => ReactElement;
  };
  const DynamicEntry = ({ children, ...props }: DynamicEntryProps<T>) => {
    const { stack } = useStackNavigation();
    const current = stack.at(-1);
    return current ? (
      <Entry {...props} value={current}>
        {children(current)}
      </Entry>
    ) : null;
  };

  type StackHeaderProps<T extends string> = {
    children: (
      navigate: Pick<StackNavigationContextState<T>, 'push' | 'pop' | 'clear' | 'stack'>
    ) => ReactElement;
  };

  const Header = ({ children, ...props }: StackHeaderProps<T>) => {
    const { stack, pop, push, clear } = useStackNavigation();

    return children({ stack, push, pop, clear });
  };

  StackNavigation.Trigger = Trigger;
  StackNavigation.Entry = Entry;
  StackNavigation.DynamicEntry = DynamicEntry;
  StackNavigation.Header = Header;

  return { StackNavigation, useStackNavigation };
};

const { StackNavigation, useStackNavigation } = createStackNavigation();

export { StackNavigation, useStackNavigation };

/**
 * TODO: 프디분들과 논의 후 공통된 Header를 만들고 DS에 넣어야함
 */
const _Header = styled.header`
  display: flex;
  padding: 12px 12px 12px 20px;
  gap: 8px;
  align-items: center;
  user-select: text;
  height: 56px;

  // svg 아이콘이 포함된 첫번째 자식이 있을 경우에만 padding-left를 줌
  &:has(> :first-child svg) {
    padding-left: 12px;
  }
`;

const _Entry = styled.section`
  position: relative;
`;
