import { Season } from '../../types/lang_season';
import { useEffect, useMemo, useState } from 'react';
import { SEASON_10_BASEURL } from '../../urls';
import { ToDotPng, ToLowerCase } from '../../utils/regex';
import { getChosung } from '../../utils/hangul';
import { search } from './utils/search';

type ChampionData = {
  name: string;
  apiName: string;
  url: string;
  cost: number;
  // 검색 시, 공백을 무시하고 검색하기 위해서 문자열 사이 공백을 제거해 저장한다.
  // 검색 알고리즘이 실행될때마다 공백을 제거하는 것보다, 미리 제거해두고 검색하는 것이 더 효율적이다.
  indexedName: string;
  // 초성 검색을 위해 미리 이름의 초성을 저장해둔다.
  // @TODO indexing 단계를 data generating 할때 해두는게 더 효율적이다. (현재는 런타임에 처리)
  indexedChosung: string;
};

type UseChampionProps = {
  season: Season;
  searchKeyword: string;
};

export const useChampionSearch = ({ season, searchKeyword }: UseChampionProps) => {
  const [championData, setChampionData] = useState<ChampionData[]>([]);

  // 챔피언 데이터 다이나믹 임포트 (현재 시즌과 관련없는 시즌에 대한 데이터는 불러오지 않아 메모리를 아낄 수 있음.)
  useEffect(() => {
    switch (season) {
      case 'season_10':
        import('../../data_hub/_generated/season_10/champions_season_10').then((module) => {
          const a = Object.values(module.champions_season_10)
            .map((champion) => {
              return {
                name: champion.name.ko,
                apiName: champion.apiName,
                url: `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(champion.tileIcon))}`,
                cost: champion.cost,
                // 문자열 사이의 공백 제거 (검색 시 공백을 무시하고 검색하기 위함)
                indexedName: champion.name.ko.replace(/\s/g, ''),
                indexedChosung: getChosung(champion.name.ko),
              };
            })
            .sort((a, b) => (a.cost > b.cost ? 1 : -1));
          setChampionData(a);
        });
        break;
      default:
        import('../../data_hub/_generated/season_10/augments_season_10').then((module) => {
          console.log(module.augments_season_10);
          // setChampionData(module.championData);
        });
        break;
    }
  }, [season]);

  // 검색 키워드가 변경되면, 검색 알고리즘을 실행한다.
  const championSearchResult = useMemo(() => {
    if (!championData) {
      return [];
    }
    if (!searchKeyword) {
      return championData;
    }

    const keyword = searchKeyword.replace(/\s/g, '');

    return search(championData, keyword);
  }, [searchKeyword, championData]);

  return { championSearchResult };
};
