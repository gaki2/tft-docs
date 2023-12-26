import { SEASON_10_BASEURL } from '../../../urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';

export const getTraitIconUrl10 = (original: string) => {
  return original ? `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(original ?? ''))}` : '';
};
