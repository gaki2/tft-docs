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
            name: 'Evelynn',
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
        <ChampionBadge10 name={'Evelynn'} lang={'ko'} />
        <ChampionBadge10 name={'Lulu'} lang={'ko'} />

      <ChampionBadge10 name={'Zac'} lang={'ko'} />



      <ItemBadge10 name={'BloodthirsterRadiant'} />
        <ItemBadge10 name={'Bloodthirster'} />
        <ItemBadge10 name={'SteraksGage'} />
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
        <AugmentBadge10 name={'Prismatic_Ticket'} />
        <AugmentBadge10 name={`Pandora's_Items_III`} />
        <AugmentBadge10 name={`Radiant_Relics`} />

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
                headlinerTrait: 'Edgelord'
            },
            {
                name: 'Lillia',
                position: {
                    row: 0,
                    col: 4,
                },
            },
            {
                name: 'Garen',
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
                headliner: true,
                headlinerTrait: 'Funk'
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
                name: 'Yone',
                position: {
                    row: 0,
                    col: 0,
                },
                starLevel: 3,
                headliner: true,
                headlinerTrait: 'CrowdDive'
            },
            {
                name: 'Zed',
                position: {
                    row: 0,
                    col: 2,
                },
                starLevel: 2,
            },
            {
                name: 'Katarina',
                position: {
                    row: 0,
                    col: 3,
                },
                starLevel: 2,
            },
            {
                name: 'Viego',
                position: {
                    row: 0,
                    col: 4,
                },
                starLevel: 2
            },
            {
                name: 'Mordekaiser',
                position: {
                    row: 0,
                    col: 1,
                },
                starLevel: 2
            },
            {
                name: 'Ekko',
                position: {
                    row: 0,
                    col: 5,
                },
                starLevel: 2,
            },
            {
                name: 'Kayle',
                position: {
                    row: 3,
                    col: 0,
                },
                starLevel: 2
            },
            {
                name: 'Qiyana',
                position: {
                    row: 0,
                    col: 3,
                },
                starLevel: 1
            },
        ]} language={'ko'} />
    </>
  )
}

