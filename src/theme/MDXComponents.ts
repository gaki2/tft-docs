import MDXComponents from '@theme-original/MDXComponents';
import {AugmentBadge10, Board10, ChampionBadge10, ItemBadge10, TraitBadge10} from "tft-utils";
import {Gap} from "@site/src/components/mdx/Gap";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // 여기에 Board 컴포넌트를 넣어줌으로써, md 파일에서 Board 컴포넌트를 사용할 때 import 하지 않고도 사용할 수 있게 된다.
  Board10,
  ChampionBadge10,
  TraitBadge10,
  ItemBadge10,
  AugmentBadge10,
  Gap,
};