import { Season } from '../../../types/lang_season';
import path from 'path';
import { LANGUAGES, SEASON_SET_DATA_IDX_MAP } from '../../../types/lang_season';
import _ from 'lodash';
import { FileSystem } from '../../../utils/file_system';

const BRANCHES = ['desc', 'name'];

const jsonDir = path.join(__dirname, '../../json');
const generatedDir = path.join(__dirname, '../../_generated');

function getAdditionalText(season: Season) {
  switch (season) {
    case 'season_10':
      return `export type TraitName_10 = Split<keyof typeof traits_season_10, '_'>[1];
export type TraitData_10 = DeepNullable<(typeof traits_season_10)['Set10_EDM']>;
`;
  }
}

export class TraitParser {
  static getTraitData(season: Season) {
    const traitDataMap = LANGUAGES.reduce((acc, language) => {
      const traitDataSet = JSON.parse(
        FileSystem.readFileSync(`${jsonDir}/${season}/tft_data_${language}.json`)
      ).setData[SEASON_SET_DATA_IDX_MAP[season]].traits;

      traitDataSet.forEach((traitData: { apiName: string }) => {
        const key = traitData.apiName;
        if (!_.get(acc, key)) {
          _.set(acc, key, traitData);
        }
        BRANCHES.forEach((branch) => {
          _.set(acc, key + '.' + branch + `.${language}`, _.get(traitData, branch));
        });
      });

      return acc;
    }, {});

    const ret = `import { DeepNullable, Split } from '../../types/utilType';

export const traits_${season} = ${JSON.stringify(traitDataMap, null, 2)}

${getAdditionalText(season)}
  `;

    return FileSystem.writeFile(`${generatedDir}/${season}/traits_${season}.ts`, ret);
  }
}

function parseTrait(season: Season) {
  return TraitParser.getTraitData(season);
}

parseTrait('season_10');
