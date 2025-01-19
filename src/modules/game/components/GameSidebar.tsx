import {GameControl} from 'modules/game/components/GameControl';
import s from 'modules/game/components/GameSidebar.module.less';
import {UnitList} from 'modules/unit/components/UnitList';
import React from 'react';

type Props = {
  cols: number;
  rows: number;
};

export const GameSidebar = ({cols, rows}: Props) => {
  return (
    <div className={s.Sidebar}>
      <div className={s.Control}>
        <GameControl cols={cols} rows={rows} />
      </div>
      <div className={s.UnitList}>
        <UnitList />
      </div>
    </div>
  );
};
