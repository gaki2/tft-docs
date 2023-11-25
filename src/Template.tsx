import {AugmentBadge10, Board10, BoardChampion10, ChampionBadge10, ItemBadge10, TraitBadge10} from "tft-utils";
import React from "react";

export const Template = () => {
    const champions: BoardChampion10[] = [
        {
            name: 'Lucian',
            position: {
                row: 0,
                col: 1,
            },
            main: true,
        },
        {
            name: 'Blitzcrank',
            position: {
                row: 0,
                col: 2,
            }
        },
        {
            name: 'Kaisa',
            position: {
                row: 3,
                col: 0,
            }
        },
        {
            name: 'Bard',
            position: {
                row: 3,
                col: 1,
            }
        }
    ]
  return (
    <>
      <ChampionBadge10 name={'Evelynn'} lang={'ko'} />

      <ChampionBadge10 name={'Gnar'} lang={'ko'} />
        <ChampionBadge10 name={'Illaoi'} lang={'ko'} />
        <ChampionBadge10 name={'Sona'} lang={'ko'} />

      <ChampionBadge10 name={'Zac'} lang={'ko'} />
      <ItemBadge10 name={'SpearOfShojin'} />
        <ItemBadge10 name={'GuinsoosRageblade'} />
      <ItemBadge10 name={'JeweledGauntlet'} />
        <ItemBadge10 name={'InfinityEdge'} />
        <ItemBadge10 name={'EdgeOfNight'} />
        <ItemBadge10 name={'Deathblade'} />

      <ItemBadge10 name={'HandOfJustice'} />
      <ItemBadge10 name={'EdgeOfNight'} />
        <ItemBadge10 name={'RabadonsDeathcap'} />

      <AugmentBadge10 name={'Healing_Orbs_I'} />
      <AugmentBadge10 name={'Golden_Ticket'} />
      <AugmentBadge10 name={'Prismatic_Ticket'} />
      <AugmentBadge10 name={'Clear_Mind'} />
        <AugmentBadge10 name={'Cluttered_Mind'} />
        <AugmentBadge10 name={'Patient_Study'} />
        <AugmentBadge10 name={'Level_Up!'} />

        <Board10 champions={[
            {
                name: 'Neeko',
                position: {
                    row: 0,
                    col: 1,
                }
            },
            {
                name: 'Lillia',
                position: {
                    row: 0,
                    col: 2,
                }
            },
            {
                name: 'Kaisa',
                position: {
                    row: 3,
                    col: 0,
                }
            },
            {
                name: 'Bard',
                position: {
                    row: 3,
                    col: 1,
                }
            }
        ]} language={'ko'} />
    </>
  )
}

