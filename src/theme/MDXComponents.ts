import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Board, ChampionBadge, ItemBadge} from "tft-utils";
// import {ChampionBadge} from '../components/TFT_Util/ChampionBadge';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // 여기에 Board 컴포넌트를 넣어줌으로써, md 파일에서 Board 컴포넌트를 사용할 때 import 하지 않고도 사용할 수 있게 된다.
  Board,
  // ChampionBadge,
  ItemBadge,
};