import { StackNavigation } from '../../ui/stack_navigation/StackNavigation';
import styled from 'styled-components';
import { MagnifyingGlassIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import React, { useEffect, useRef, useState } from 'react';
import { allChampionMockData, ChampMock } from './mock';
import { debounce } from 'lodash';

type ComboBoxProps = {
  onKeyDown?: (e: KeyboardEvent) => void;
};

export const ComboBox = (props: ComboBoxProps) => {
  const { onKeyDown: onKeyDownInjected } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const listWrapperRef = useRef<HTMLUListElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [listItems, setListItems] = useState<ChampMock[]>(allChampionMockData);

  useEffect(() => {
    // When you update the value of input, you should use onChange().
    // But, If you want to catch some character and treat about that, you should use onKeyDown().
    // So, in your case, you should use both.
    // this is an example code about backspace.
    // https://stackoverflow.com/questions/62125195/onkeydown-get-value-from-e-target-value
    const onKeyDown = debounce((e: KeyboardEvent) => {
      onKeyDownInjected?.(e);

      // 위, 아래 방향키를 입력했다면, activeIndex 를 변경하여 선택된 리스트를 갱신한다.
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const isArrowUp = e.key === 'ArrowUp';
        // listItems 의 범위를 벗어나지 않도록 한다 만약 범위보다 크거나 작다면 값을 바꾸지 않는다.
        const nextActiveIndex = isArrowUp ? activeIndex - 1 : activeIndex + 1;
        if (nextActiveIndex < 0 || nextActiveIndex >= listItems.length) return;
        setActiveIndex(nextActiveIndex);
        // 선택된 리스트가 보이도록 스크롤링한다.
        listItemsRef.current[nextActiveIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        e.preventDefault();
      }
    }, 25);

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDownInjected, setActiveIndex, listItems, activeIndex]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickXButton = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    setActiveIndex(0);
    // 스크롤 위치를 0 으로 초기화
    listWrapperRef.current?.scrollTo(0, 0);
  }, [inputValue]);

  return (
    <StackNavigation initialStack={['default']}>
      <Wrapper>
        <StackNavigation.Header>
          {({ stack, pop, push, clear }) => {
            return (
              <HeaderWrapper>
                <IconWrapper>
                  <MagnifyingGlassIcon />
                </IconWrapper>
                <Input ref={inputRef} value={inputValue} onChange={onChange} />
                <XButton onClick={onClickXButton}>
                  <CrossCircledIcon />
                </XButton>
              </HeaderWrapper>
            );
          }}
        </StackNavigation.Header>
        {/* default 일때 컨텐츠 UI */}
        <StackNavigation.Entry value={'default'}>
          <ContentWrapper ref={listWrapperRef}>
            <Description>작업</Description>
            {listItems.map((item, idx) => {
              return (
                <ListItem
                  key={idx}
                  aria-selected={idx === activeIndex}
                  ref={(element) => (listItemsRef.current[idx] = element)}>
                  <ListWrapperButton tabIndex={-1}>
                    <ListItemIcon>
                      <MagnifyingGlassIcon />
                    </ListItemIcon>
                    <ListItemTitle>{item.name}</ListItemTitle>
                  </ListWrapperButton>
                </ListItem>
              );
            })}
          </ContentWrapper>
        </StackNavigation.Entry>

        {/* 보드 일때 컨텐츠 UI */}

        {/* 그 외 (챔피언, 증강, 아이템) 일때 컨텐츠 UI */}
      </Wrapper>
    </StackNavigation>
  );
};

const Wrapper = styled.div`
  width: 320px;
  border: 1px solid ${({ theme }) => theme.colors.black_10};
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding-left: 4px;
  align-items: center;
  border: 1px solid crimson;

  & > *:not(input) {
    flex-shrink: 0;
  }
`;

const IconWrapper = styled.div`
  width: 38px;
  height: 38px;
  ${({ theme }) => theme.flex.center};
`;

const BackButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 9999px;
`;

const Input = styled.input`
  width: 100%;
  height: 38px;
`;

const XButton = styled.button`
  width: 38px;
  height: 38px;
  ${({ theme }) => theme.flex.center};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_10};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.black_10};
  width: 100%;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5;
`;

const ContentWrapper = styled.ul`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  & > * {
    // 모든 자식들 (list, p) 은 공통된 패딩을 가진다.
    padding: 8px 12px;
  }
`;

const ListItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  gap: 8px;
  align-items: center;
  border: 1px solid #1a8870;
  cursor: pointer;

  //현재 li 가 active 라면,  스타일링
  &[aria-selected='true'] {
    background-color: ${({ theme }) => theme.colors.gray_20};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.gray_10};
  }
`;

/** li 가 실제로는 button 역할을 하고 있으므로, children 을 button 으로 감싸준다. */
const ListWrapperButton = styled.button`
  ${({ theme }) => theme.full};
  display: flex;
`;

const ListItemIcon = styled.div`
  width: 24px;
  height: 24px;
  ${({ theme }) => theme.flex.center};
`;

const ListItemTitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5;
`;
