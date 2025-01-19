import React from 'react';
import s from 'modules/game/components/GameSidebar.module.less';
import {UnitList} from 'modules/unit/components/UnitList';
import {GameControl} from 'modules/game/components/GameControl';

export const GameSidebar = () => {
  return (
    <div className={s.Sidebar}>
      <div className={s.Control}>
        <GameControl />
      </div>
      <div className={s.UnitList}>
        <UnitList />
      </div>
    </div>
  );
};
