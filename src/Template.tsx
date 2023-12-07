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
      <ChampionBadge10 name={'Vi'} lang={'ko'} />
      <ChampionBadge10 name={'Zac'} lang={'ko'} />
        <ChampionBadge10 name={'Gnar'} lang={'ko'} />
        <ChampionBadge10 name={'Yorick'} lang={'ko'} />
        <ChampionBadge10 name={'Gragas'} lang={'ko'} />
        <ChampionBadge10 name={'Lulu'} lang={'ko'} />

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
                name: 'KSante',
                position: {
                    row: 0,
                    col: 2,
                },
                starLevel: 2,
            },
            {
                name: 'Gnar',
                position: {
                    row: 0,
                    col: 3,
                },
                starLevel: 2,
                headliner: true,
                headlinerTrait: 'Superfan'
            },
            {
                name: 'Lillia',
                position: {
                    row: 0,
                    col: 4,
                },
            },
            {
                name: 'Aphelios',
                position: {
                    row: 3,
                    col: 0,
                },
            },
            {
                name: 'Senna',
                position: {
                    row: 3,
                    col: 1,
                },
            }
        ]} />
        <Board10 champions={[
            {
                name: 'Ekko',
                position: {
                    row: 0,
                    col: 5,
                },
                starLevel: 2,
            },
            {
                name: 'Urgot',
                position: {
                    row: 0,
                    col: 1,
                },
                starLevel: 2,
            },
            {
                name: 'KSante',
                position: {
                    row: 0,
                    col: 2,
                },
                starLevel: 2,
            },
            {
                name: 'Sett',
                position: {
                    row: 0,
                    col: 3,
                },
                starLevel: 3,
                headliner: true,
                headlinerTrait: 'PopBand'
            },
            {
                name: 'Yone',
                position: {
                    row: 0,
                    col: 4,
                },
                starLevel: 2,
            },
            {
                name: 'Aphelios',
                position: {
                    row: 3,
                    col: 0,
                },
                starLevel: 3,
            },
            {
                name: 'Senna',
                position: {
                    row: 3,
                    col: 1,
                },
                starLevel: 3,
            }
        ]} language={'ko'} />



        <Board10 champions={[
            {
                name: 'Neeko',
                position: {
                    row: 0,
                    col: 3,
                },
                starLevel: 3,
            },
            {
                name: 'Ekko',
                position: {
                    row: 0,
                    col: 0,
                }
            },
            {
                name: 'Kennen',
                position: {
                    row: 0,
                    col: 2,
                },
                starLevel: 2,
            },
            {
                name: 'Lillia',
                position: {
                    row: 0,
                    col: 1,
                }
            },
            {
                name: 'Seraphine',
                position: {
                    row: 3,
                    col: 1,
                }
            },
            {
                name: 'Annie',
                position: {
                    row: 3,
                    col: 0,
                }
            },
            {
                name: 'Lulu',
                position: {
                    row: 3,
                    col: 0,
                }
            },
        ]} language={'ko'} />
    </>
  )
}

