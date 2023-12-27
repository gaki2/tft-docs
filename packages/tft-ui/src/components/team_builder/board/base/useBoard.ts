import { useEffect, useMemo, useState } from 'react';
import { BoardModel, ChampionNode } from './BoardModel';
import { LanguageType, Season } from '../../../../types';

export const useBoard = (championData: ChampionNode[], season: Season, lang: LanguageType) => {
  const [_, setRerender] = useState(0);
  const board = useMemo(() => new BoardModel(championData, season, lang), []);

  useEffect(() => {
    if (board) {
      board.addSlotsStateListener(() => {
        setRerender((prev) => prev + 1);
      });
    }
  }, [board]);

  return {
    board,
  };
};
