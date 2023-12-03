import {AugmentBadge10, Board10, BoardChampion10, ChampionBadge10, ItemBadge10, TraitBadge10} from "tft-utils";
import React from "react";

export const Template = () => {
    const champions: BoardChampion10[] = [
        {
            name: 'Blitzcrank',
            position: {
                row: 0,
                col: 3,
            },
            starLevel: 2,
        },
        {
            name: 'Gragas',
            position: {
                row: 1,
                col: 0,
            },
            starLevel: 2,
        },
        {
            name: 'Ekko',
            position: {
                row: 1,
                col: 1,
            },
            starLevel: 2,
        },
        {
            name: 'DiscoBall',
            position: {
                row: 1,
                col: 2,
            },
        },
        {
            name: 'Ziggs',
            position: {
                row: 2,
                col: 0,
            },
            starLevel: 2,
        },
        {
            name: '',
            position: {
                row: 2,
                col: 1,
            },
            starLevel: 2,
        },
        {
            name: 'Nami',
            position: {
                row: 2,
                col: 2,
            },
            starLevel: 2,
        },
        {
            name: 'Blitzcrank',
            position: {
                row: 3,
                col: 0,
            },
            starLevel: 2,
        },
        {
            name: 'Lulu',
            position: {
                row: 3,
                col: 1,
            },
            starLevel: 2,
        }
    ]
  return (
    <>
      <ChampionBadge10 name={'B'} lang={'ko'} />
      <ChampionBadge10 name={'TwistedFate'} lang={'ko'} />
        <ChampionBadge10 name={'Ziggs'} lang={'ko'} />
        <ChampionBadge10 name={'Illaoi'} lang={'ko'} />
        <ChampionBadge10 name={'Gragas'} lang={'ko'} />
        <ChampionBadge10 name={'Sona'} lang={'ko'} />

      <ChampionBadge10 name={'Zac'} lang={'ko'} />



      <ItemBadge10 name={'WarmogsArmor'} />
        <ItemBadge10 name={'DragonsClaw'} />
        <ItemBadge10 name={'BrambleVest'} />
      <ItemBadge10 name={'GargoyleStoneplate'} />
        <ItemBadge10 name={'Steadfast_Heart'} />
        <ItemBadge10 name={'RecurveBow'} />




        <ItemBadge10 name={'BrambleVest'} />
        <ItemBadge10 name={'EvenShroud'} />
        <ItemBadge10 name={'SunfireCape'} />

      <AugmentBadge10 name={'Long_Distance_Pals'} />
      <AugmentBadge10 name={'Best_Friends_II'} />
      <AugmentBadge10 name={'Harmacist_II'} />
      <AugmentBadge10 name={'Three\'s_Company'} />

        <AugmentBadge10 name={'Contagion'} />
        <AugmentBadge10 name={'Patient_Study'} />
        <AugmentBadge10 name={'Level_Up!'} />

        <Board10 champions={[
            {
                name: 'Gragas',
                position: {
                    row: 1,
                    col: 0,
                },
                starLevel: 2,
            },
            {
                name: 'Taric',
                position: {
                    row: 1,
                    col: 1,
                },
                starLevel: 2,
            },
            {
                name: 'Kennen',
                position: {
                    row: 2,
                    col: 2,
                },
            },
            {
                name: 'DiscoBall',
                position: {
                    row: 2,
                    col: 1,
                },
                starLevel: 2,
            },
            {
                name: 'Nami',
                position: {
                    row: 3,
                    col: 0,
                },
                starLevel: 2,
            },
            {
                name: 'Bard',
                position: {
                    row: 3,
                    col: 1,
                },
                starLevel: 2,
            }
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

