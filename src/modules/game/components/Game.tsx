import React from 'react';
import s from 'modules/game/components/Game.module.less';
import {GameMap} from 'modules/game/components/GameMap';
import {GameSidebar} from 'modules/game/components/GameSidebar';
import {useUnitGetList} from 'modules/unit/model/actions';

const COLS = 10;
const ROWS = 10;

export const Game = () => {
  useUnitGetList(ROWS, COLS);

  return (
    <div className={`${s.Game} box__row box__row_no-offset`}>
      <div
        className={`${s.Sidebar} box__col box__col_no-offset box__col_xs_12 box__col_sm_4 box__col_md_3`}
      >
        <GameSidebar />
      </div>
      <div className="box__col box__col_no-offset box__col_xs_12 box__col_sm_8 box__col_md_9">
        <GameMap />
      </div>
    </div>
  );
};
