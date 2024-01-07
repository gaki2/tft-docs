type List = {
  indexedName: string;
  indexedChosung: string;
};

// 입력된 Keyword 와 매칭되는 아이템을 필터해서 리턴하는 함수.
export const search = <T extends List>(list: T[], keyword: string) => {
  return list.filter((item) => {
    return item.indexedName.includes(keyword) || item.indexedChosung.includes(keyword);
  });
};
