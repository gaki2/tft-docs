import {AugmentBadge10, Board10, BoardChampion10, ChampionBadge10, ItemBadge10, TraitBadge10} from "tft-utils";
import React from "react";

export const Template = () => {
    const champions: BoardChampion10[] = [
        {
            name: 'Kennen',
            position: {
                row: 0,
                col: 0,
            },
            starLevel: 2,
        },
        {
            name: 'Pantheon',
            position: {
                row: 0,
                col: 1,
            },
            starLevel: 2,
        },
        {
            name: 'Neeko',
            position: {
                row: 0,
                col: 2,
            },
            starLevel: 2,
        },
        {
            name: 'Amumu',
            position: {
                row: 0,
                col: 3,
            },
            starLevel: 3,
        },
        {
            name: 'Poppy',
            position: {
                row: 0,
                col: 4,
            },
            starLevel: 2,
        },
        {
            name: 'Thresh',
            position: {
                row: 0,
                col: 5,
            },
            starLevel: 2,
        },
        {
            name: 'Yorick',
            position: {
                row: 0,
                col: 6,
            },
            starLevel: 2,
        },
        {
            name: 'Karthus',
            position: {
                row: 3,
                col: 0,
            },
            starLevel: 2,
        },
        {
            name: 'Vex',
            position: {
                row: 3,
                col: 1,
            },
            starLevel: 3,
        }
    ]
  return (
    <>
      <ChampionBadge10 name={'Evelynn'} lang={'ko'} />

      <ChampionBadge10 name={'Akali'} lang={'ko'} />
        <ChampionBadge10 name={'Amumu'} lang={'ko'} />
        <ChampionBadge10 name={'Yorick'} lang={'ko'} />

      <ChampionBadge10 name={'Zac'} lang={'ko'} />
      <ItemBadge10 name={'SpearOfShojin'} />
        <ItemBadge10 name={'GuinsoosRageblade'} />
      <ItemBadge10 name={'JeweledGauntlet'} />
        <ItemBadge10 name={'InfinityEdge'} />
        <ItemBadge10 name={''} />
        <ItemBadge10 name={''} />

      <ItemBadge10 name={'HextechGunbladeRadiant'} />
      <ItemBadge10 name={'SpearOfShojin'} />
        <ItemBadge10 name={'ArchangelsStaff'} />

      <AugmentBadge10 name={'Healing_Orbs_I'} />
      <AugmentBadge10 name={'Golden_Ticket'} />
      <AugmentBadge10 name={'Prismatic_Ticket'} />
      <AugmentBadge10 name={'Three\'s_Company'} />
        <AugmentBadge10 name={'Cluttered_Mind'} />
        <AugmentBadge10 name={'Patient_Study'} />
        <AugmentBadge10 name={'Level_Up!'} />

        <Board10 champions={[
            {
                name: 'Amumu',
                position: {
                    row: 0,
                    col: 1,
                }
            },
            {
                name: 'Taric',
                position: {
                    row: 0,
                    col: 2,
                }
            },
            {
                name: 'Neeko',
                position: {
                    row: 0,
                    col: 3,
                }
            },
            {
                name: 'Pantheon',
                position: {
                    row: 0,
                    col: 4,
                }
            },
            {
                name: 'Vex',
                position: {
                    row: 3,
                    col: 0,
                }
            },
            {
                name: 'Annie',
                position: {
                    row: 3,
                    col: 1,
                }
            },
            {
                name: 'Samira',
                position: {
                    row: 3,
                    col: 2,
                }
            }
        ]} language={'ko'} />
    </>
  )
}

