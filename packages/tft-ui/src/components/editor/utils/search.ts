type List = {
  indexedName: string;
  indexedChosung: string;
};
export const search = <T extends List>(list: T[], keyword: string) => {
  return list.filter((item) => {
    return item.indexedName.includes(keyword) || item.indexedChosung.includes(keyword);
  });
};
