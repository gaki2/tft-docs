import {ChampionBadge as _ChampionBadge} from 'tft-utils';
import React, {ComponentProps} from "react";
import styles from './styles.module.css';

type ChampionBadgeProps = ComponentProps<typeof _ChampionBadge>;

export const ChampionBadge = (props: ChampionBadgeProps) => {
  return (<ChampionBadge {...props} className={styles.verticalMiddle} />);
};