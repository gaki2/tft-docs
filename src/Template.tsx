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
      <ChampionBadge10 name={'Lillia'} lang={'ko'} />
        <ChampionBadge10 name={'Kaisa'} lang={'ko'} />
      <ChampionBadge10 name={'Bard'} lang={'ko'} />

      <ChampionBadge10 name={'Neeko'} lang={'ko'} />
      <ItemBadge10 name={'DragonsClaw'} />
      <ItemBadge10 name={'IonicSpark'} />
      <ItemBadge10 name={'GargoyleStoneplate'} />
      <ItemBadge10 name={'WarmogsArmor'} />
      <ItemBadge10 name={'WarmogsArmor'} />

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

