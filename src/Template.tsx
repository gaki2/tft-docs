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
      <ChampionBadge10 name={'TahmKench'} lang={'ko'} />

      <ChampionBadge10 name={'Lux'} lang={'ko'} />
        <ChampionBadge10 name={'Urgot'} lang={'ko'} />
        <ChampionBadge10 name={'Yorick'} lang={'ko'} />

      <ChampionBadge10 name={'Zac'} lang={'ko'} />
      <ItemBadge10 name={'SpearOfShojin'} />
        <ItemBadge10 name={'Deathblade'} />
      <ItemBadge10 name={'JeweledGauntlet'} />
        <ItemBadge10 name={'LastWhisper'} />
        <ItemBadge10 name={'RecurveBow'} />
        <ItemBadge10 name={'Guardbreaker'} />



        <ItemBadge10 name={'BrambleVest'} />
        <ItemBadge10 name={'EvenShroud'} />
        <ItemBadge10 name={'SunfireCape'} />

      <AugmentBadge10 name={'Long_Distance_Pals'} />
      <AugmentBadge10 name={'Best_Friends_II'} />
      <AugmentBadge10 name={'Harmacist_II'} />
      <AugmentBadge10 name={'Three\'s_Company'} />
        <AugmentBadge10 name={'Cluttered_Mind'} />
        <AugmentBadge10 name={'Patient_Study'} />
        <AugmentBadge10 name={'Level_Up!'} />

        <Board10 champions={[
            {
                name: 'Amumu',
                position: {
                    row: 0,
                    col: 0,
                }
            },
            {
                name: 'TahmKench',
                position: {
                    row: 0,
                    col: 1,
                }
            },
            {
                name: 'Sett',
                position: {
                    row: 0,
                    col: 2,
                }
            },
            {
                name: 'Thresh',
                position: {
                    row: 0,
                    col: 3,
                }
            },
            {
                name: 'Poppy',
                position: {
                    row: 0,
                    col: 4,
                }
            },
            {
                name: 'Urgot',
                position: {
                    row: 1,
                    col: 2,
                },
                starLevel: 3,
            },
            {
                name: 'Samira',
                position: {
                    row: 3,
                    col: 0,
                },
                starLevel: 3,
            },
            {
                name: 'Vex',
                position: {
                    row: 3,
                    col: 1,
                }
            },
        ]} language={'ko'} />



        <Board10 champions={[
            {
                name: 'TahmKench',
                position: {
                    row: 0,
                    col: 0,
                }
            },
            {
                name: 'Sett',
                position: {
                    row: 0,
                    col: 1,
                }
            },
            {
                name: 'Urgot',
                position: {
                    row: 1,
                    col: 2,
                },
                starLevel: 3,
            },
            {
                name: 'Samira',
                position: {
                    row: 3,
                    col: 0,
                },
                starLevel: 3,
            },
            {
                name: 'Vex',
                position: {
                    row: 3,
                    col: 1,
                }
            },
        ]} language={'ko'} />
    </>
  )
}

