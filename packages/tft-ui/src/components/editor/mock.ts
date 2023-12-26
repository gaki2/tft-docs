import { champions_season_10 } from '../../data_hub/_generated/season_10/champions_season_10';
import { ToDotPng, ToLowerCase } from '../../utils/regex';
import { SEASON_10_BASEURL } from '../../urls';

export type ChampMock = {
  name: string;
  cost: number;
  url: string;
};

export const allChampionMockData = Object.values(champions_season_10).map((item) => {
  return {
    name: item.name.ko,
    cost: item.cost,
    url: `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(item.icon))}`,
  };
}) as ChampMock[];
