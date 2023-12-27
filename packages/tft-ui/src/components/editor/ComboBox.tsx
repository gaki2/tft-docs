import { StackNavigation } from '../../ui/stack_navigation/StackNavigation';
import styled from 'styled-components';
import { MagnifyingGlassIcon, CrossCircledIcon, CaretLeftIcon } from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { S3 } from '../../urls';
import { useChampionSearch } from './useChampionSearch';
import { useItemSearch } from './useItemSearch';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Entry = 'default' | 'champion' | 'item' | 'augment' | 'builder';

const DEFAULT_LIST_ITEMS: { name: string; url: string; targetEntry: Entry }[] = [
  // stackValue: 리스트를 선택 시 스택에 넣을 값
  { name: '챔피언', url: `${S3}/comboBox/tft_champion.webp`, targetEntry: 'champion' },
  { name: '아이템', url: `${S3}/comboBox/tft_item.webp`, targetEntry: 'item' },
  // { name: '증강', url: `${S3}/comboBox/tft_augment.webp`, targetEntry: 'augment' },
  // { name: '배치툴', url: `${S3}/comboBox/tft_builder.webp`, targetEntry: 'builder' },
];

type ComboBoxProps = {
  // esc, space, /, delete 를 눌렀을때 팝업이 꺼지는 기능을 구현하기 위해 외부에서 콜백을 주입받도록 만듦
  onKeyDown?: (e: KeyboardEvent) => void;
  onSelect?: ({ entry, value }: { entry: Entry; value: string }) => void;
};

// enter 를 눌렀을때 push 함수를 실행해야 해서 _ComboBox 에 StackNavigation 을 래핑했음.
export const ComboBox = (props: ComboBoxProps) => {
  return (
    <StackNavigation initialStack={['default']}>
      <StackNavigation.Trigger>
        {({ push }) => {
          return <_ComboBox push={push} {...props}></_ComboBox>;
        }}
      </StackNavigation.Trigger>
    </StackNavigation>
  );
};

type _ComboBoxProps = {
  push: (entry: string) => void;
} & ComboBoxProps;

const _ComboBox = (props: _ComboBoxProps) => {
  const { onKeyDown: onKeyDownInjected, push, onSelect } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const listWrapperRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const { championSearchResult } = useChampionSearch({
    season: 'season_10',
    searchKeyword: inputValue,
  });
  const { itemSearchResult } = useItemSearch({ season: 'season_10', searchKeyword: inputValue });
  const description = useMemo(
    () => (inputValue ? `다음에서 "${inputValue}" 검색` : '카테고리'),
    [inputValue]
  );
  const championDescription = useMemo(
    () => (inputValue ? `챔피언 "${inputValue}" 검색 결과` : '챔피언 검색 결과'),
    [inputValue]
  );

  const prePop = useCallback(() => {
    // 스택이 pop 되었을때, listLength 를 DEFAULT_LIST_ITEMS 의 길이로 변경한다. (현재는 스택은 최대 2뎁스 이므로, pop 되면 무조건 DEFAULT_LIST_ITEMS 이 보이기때문)
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    // When you update the value of input, you should use onChange().
    // But, If you want to catch some character and treat about that, you should use onKeyDown().
    // So, in your case, you should use both.
    // this is an example code about backspace.
    // https://stackoverflow.com/questions/62125195/onkeydown-get-value-from-e-target-value
    const onKeyDown = (e: KeyboardEvent) => {
      onKeyDownInjected?.(e);

      // 위, 아래 방향키를 입력했다면, activeIndex 를 변경하여 선택된 리스트를 갱신한다.
      // 한글 입력중에 위아래 방향키를 누르면 이벤트가 2번 실행되는 버그픽스 (!e.isComposing 조건문 추가): https://4sii.tistory.com/473
      if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && !e.isComposing) {
        // 위, 아래 화살표를 입력했을때 input 에서 선택 지점이 바뀌지 않도록 하는 기능.
        e.preventDefault();

        const lists = Array.from(listWrapperRef.current?.getElementsByTagName('li') ?? []);
        const currentActiveIdx = lists.findIndex(
          (list) => list.getAttribute('aria-selected') === 'true'
        );
        const isArrowUp = e.key === 'ArrowUp';
        // listItems 의 범위를 벗어나지 않도록 한다 만약 범위보다 크거나 작다면 값을 바꾸지 않는다.
        const nextActiveIndex = isArrowUp ? currentActiveIdx - 1 : currentActiveIdx + 1;
        if (nextActiveIndex < 0 || nextActiveIndex >= lists.length) return;
        setActiveIndex(nextActiveIndex);
        // 선택된 리스트가 보이도록 스크롤링한다.
        lists[nextActiveIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }

      if (e.key === 'Enter') {
        const lists = Array.from(listWrapperRef.current?.getElementsByTagName('li') ?? []);
        const currentActiveIdx = lists.findIndex(
          (list) => list.getAttribute('aria-selected') === 'true'
        );
        const currentActiveList = lists[currentActiveIdx];
        const entry = currentActiveList?.getAttribute('data-entry') as Entry;
        const nextEntry = currentActiveList?.getAttribute('data-targetentry') as Entry;
        const championName = currentActiveList?.getAttribute('data-championname');

        let value = '';

        switch (entry) {
          case 'champion':
            value = championName ?? '';
            break;
          case 'default':
            value = nextEntry;
            push(value);
            break;
          default:
            value = inputValue;
            break;
        }
        onSelect?.({ entry, value });
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDownInjected]);

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
    <Wrapper>
      <StackNavigation.Header>
        {({ stack, pop, push, clear }) => {
          return (
            <HeaderWrapper>
              <IconButtonWrapper>
                {stack.length > 1 ? (
                  <IconButton aria-label={'back to prev panel'}>
                    <CaretLeftIcon
                      width={24}
                      height={24}
                      onClick={() => {
                        prePop();
                        pop();
                      }}
                    />
                  </IconButton>
                ) : (
                  <MagnifyingGlassIcon width={24} height={24} />
                )}
              </IconButtonWrapper>
              <Input
                type='text'
                ref={inputRef}
                value={inputValue}
                onChange={onChange}
                placeholder={'챔피언, 아이템, 증강을 검색해보세요.'}
              />
              {inputValue && (
                <XButton onClick={onClickXButton} aria-label={'clear input value'}>
                  <CrossCircledIcon width={20} height={20} color={'#0d1216'} />
                </XButton>
              )}
            </HeaderWrapper>
          );
        }}
      </StackNavigation.Header>
      {/* default 일때 컨텐츠 UI */}
      <ContentWrapper ref={listWrapperRef}>
        <StackNavigation.Entry value={'default'}>
          <Description>{description}</Description>
          <StackNavigation.Trigger>
            {({ push }) => {
              return (
                <>
                  {DEFAULT_LIST_ITEMS.map((listData, idx) => (
                    <ListItem
                      key={idx}
                      aria-selected={idx === activeIndex}
                      role='button'
                      data-entry={'default'}
                      data-targetentry={listData.targetEntry}
                      onClick={() => push(listData.targetEntry)}>
                      {/* tabIndex={-1} 은 탭으로 버튼이 focus 되는 동작을 막기 위해 추가함. (기획) */}
                      <ListWrapperButton
                        tabIndex={-1}
                        aria-pressed={idx === activeIndex}
                        onClick={(e) => console.log('buttonClick')}>
                        <ListItemImg
                          src={listData.url}
                          alt={listData.name}
                          width={'24px'}
                          height={'24px'}>
                          {/*<img src={listData.url} alt={listData.name} />*/}
                        </ListItemImg>
                        <ListItemTitle>{listData.name}</ListItemTitle>
                      </ListWrapperButton>
                    </ListItem>
                  ))}
                </>
              );
            }}
          </StackNavigation.Trigger>
        </StackNavigation.Entry>
        {/* 챔피언 리스트 */}
        <StackNavigation.Entry value={'champion'}>
          <Description>{championDescription}</Description>
          {championSearchResult.map((listData, idx) => (
            <ListItem
              key={idx}
              aria-selected={idx === activeIndex}
              role='button'
              data-entry='champion'
              data-championname={listData.apiName.split('_')[1]}>
              {/* tabIndex={-1} 은 탭으로 버튼이 focus 되는 동작을 막기 위해 추가함. (기획) */}
              <ListWrapperButton tabIndex={-1}>
                <ListItemImg
                  src={listData.url}
                  width={'24px'}
                  height={'24px'}
                  alt={listData.name}
                  cost={listData.cost}>
                  {/*<img src={listData.url} alt={listData.name} />*/}
                </ListItemImg>
                <ListItemTitle>{listData.name}</ListItemTitle>
              </ListWrapperButton>
            </ListItem>
          ))}
        </StackNavigation.Entry>
        <StackNavigation.Entry value={'item'}>
          <Description>{championDescription}</Description>
          {itemSearchResult.map((listData, idx) => (
            <ListItem
              key={idx}
              aria-selected={idx === activeIndex}
              role='button'
              data-entry='champion'
              data-itemname={listData.apiName.split('_')[2]}>
              <ListWrapperButton tabIndex={-1}>
                <ListItemImg
                  src={listData.url}
                  width={'24px'}
                  height={'24px'}
                  alt={listData.name}></ListItemImg>
                <ListItemTitle>{listData.name}</ListItemTitle>
              </ListWrapperButton>
            </ListItem>
          ))}
        </StackNavigation.Entry>
      </ContentWrapper>
      {/* 보드 일때 컨텐츠 UI */}
      {/* 그 외 (챔피언, 증강, 아이템) 일때 컨텐츠 UI */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  border: 1px solid ${({ theme }) => theme.colors.black_10};
  border-radius: 4px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 0 4px;
  align-items: center;

  & > *:not(input) {
    flex-shrink: 0;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_30};
`;

const IconButtonWrapper = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_10};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_20};
  }
`;

const BackButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 9999px;
`;

const Input = styled.input`
  width: 100%;
  height: 38px;
  margin-right: 8px;
  border: 0;
`;

const XButton = styled.button`
  width: 30px;
  height: 30px;
  ${({ theme }) => theme.flex.center};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  align-items: center;
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
  gap: 8px;
  align-items: center;

  // button 이 focus 되었을때 기본 스타일을 제거한다.
  &:focus {
    outline: none;
  }
`;

const ListItemImg = styled(LazyLoadImage)<{ cost?: number }>`
  width: 24px;
  height: 24px;
  ${({ theme }) => theme.flex.center};
  object-fit: cover;
  outline: ${({ cost, theme }) => (cost ? `2px solid ${theme.colors[`cost_${cost}`]}` : 'none')};
  border-radius: 2px;
`;

const ListItemTitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5;
`;
