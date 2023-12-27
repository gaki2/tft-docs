import { useEffect, useMemo, useState } from 'react';
import { Season } from '../../types/lang_season';
import { getChosung } from '../../utils/hangul';
import { SEASON_10_BASEURL } from '../../urls';
import { ToDotPng, ToLowerCase } from '../../utils/regex';
import { search } from './utils/search';

type ItemData = {
  name: string;
  apiName: string;
  url: string;
  // 검색 시, 공백을 무시하고 검색하기 위해서 문자열 사이 공백을 제거해 저장한다.
  // 검색 알고리즘이 실행될때마다 공백을 제거하는 것보다, 미리 제거해두고 검색하는 것이 더 효율적이다.
  indexedName: string;
  // 초성 검색을 위해 미리 이름의 초성을 저장해둔다.
  // @TODO indexing 단계를 data generating 할때 해두는게 더 효율적이다. (현재는 런타임에 처리)
  indexedChosung: string;
};

type UseItemProps = {
  season: Season;
  searchKeyword: string;
};

export const useItemSearch = ({ season, searchKeyword }: UseItemProps) => {
  const [itemData, setItemData] = useState<ItemData[]>([]);

  // 아이템 데이터 다이나믹 임포트 (현재 시즌과 관련없는 시즌에 대한 데이터는 불러오지 않아 메모리를 아낄 수 있음.)
  useEffect(() => {
    switch (season) {
      case 'season_10':
        import('../../data_hub/_generated/season_10/items_season_10').then((module) => {
          const a = Object.values(module.items_season_10)
            .map((item) => {
              return {
                name: item.name.ko,
                apiName: item.apiName,
                url: `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(item.icon ?? ''))}`,
                // 문자열 사이의 공백 제거 (검색 시 공백을 무시하고 검색하기 위함)
                indexedName: item.name.ko.replace(/\s/g, ''),
                indexedChosung: getChosung(item.name.ko),
              };
            })
            .sort((a, b) => (a.name > b.name ? 1 : -1));
          setItemData(a);
        });
        break;
    }
  }, [season]);

  const itemSearchResult = useMemo(() => {
    if (!itemData) {
      return [];
    }
    if (!searchKeyword) {
      return itemData;
    }
    return search(itemData, searchKeyword.replace(/\s/g, ''));
  }, [searchKeyword, itemData]);

  return { itemSearchResult };
};
