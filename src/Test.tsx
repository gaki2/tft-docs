import {ChampionBadge, TraitBadge, ItemBadge, AugmentBadge, Board} from "tft-utils";
import React from "react";

export const N_ChampionBadge = () => {
  return (
    <>
      <ChampionBadge season={'season_9b'} championName={'일라오이'} />
    <ChampionBadge season={'season_9b'} championName={'미스_포츈'} />
      <ChampionBadge season={'season_9b'} championName={'노틸러스'} />
      <ChampionBadge season={'season_9b'} championName={'닐라'} />
      <ChampionBadge season={'season_9b'} championName={'갱플랭크'} />
      <ItemBadge season={'season_9b'} itemName={'가고일_돌갑옷'} />
      <ItemBadge season={'season_9b'} itemName={'덤불_조끼'} />
      <ItemBadge season={'season_9b'} itemName={'용의_발톱'} />
      <ItemBadge season={'season_9b'} itemName={'태양불꽃_망토'} />
      <ItemBadge season={'season_9b'} itemName={'워모그의_갑옷'} />
      <ItemBadge season={'season_9b'} itemName={'푸른_파수꾼'} />
      <ItemBadge season={'season_9b'} itemName={'적응형_투구'} />
      <ItemBadge season={'season_9b'} itemName={'보석_건틀릿'} />
      <ItemBadge season={'season_9b'} itemName={'거인_학살자'} />
      <ItemBadge season={'season_9b'} itemName={'마법공학_총검'} />
      <ItemBadge season={'season_9b'} itemName={'수은'} />
      <ItemBadge season={'season_9b'} itemName={'저녁갑주'} />
      <ItemBadge season={'season_9b'} itemName={'고속_연사포'} />
      <ItemBadge season={'season_9b'} itemName={'피바라기'} />
      <ItemBadge season={'season_9b'} itemName={'스테락의_도전'} />
      <ItemBadge season={'season_9b'} itemName={'거인_학살자'} />

      <TraitBadge season={'season_9b'} name={'빌지워터'} />
      <AugmentBadge season={'season_9b'} name={'빌지워터_문장'} />
      <AugmentBadge season={'season_9b'} name={'빌지워터_왕관'} />
      <AugmentBadge season={'season_9b'} name={'떠오르는_악명'} />
      <AugmentBadge season={'season_9b'} name={'떠오르는_악명+'} />
      <AugmentBadge season={'season_9b'} name={'떠오르는_악명++'} />
      <AugmentBadge season={'season_9b'} name={'회복의_구_II'} />
      <AugmentBadge season={'season_9b'} name={'판도라의_아이템'} />
      <AugmentBadge season={'season_9b'} name={'고대의_기록_보관소_I'} />
      <AugmentBadge season={'season_9b'} name={'고대의_기록_보관소_II'} />

      <Board champions={[{position: {row: 0, col: 0}, name: '일라오이'}]} season={'season_9b'} />
    </>
  )
}

