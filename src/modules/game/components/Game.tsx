import {GameMap} from 'modules/game-map/components/GameMap';
import s from 'modules/game/components/Game.module.less';
import {GameSidebar} from 'modules/game/components/GameSidebar';
import {useUnitGetList} from 'modules/unit/model/actions';
import React from 'react';

const COLS = 100;
const ROWS = 100;

export const Game = () => {
  useUnitGetList(ROWS, COLS);

  return (
    <div className={`${s.Game} box__row box__row_no-offset`}>
      <div className={`${s.Sidebar} box__col box__col_no-offset box__col_xs_3`}>
        <GameSidebar cols={COLS} rows={ROWS} />
      </div>
      <div className="box__col box__col_no-offset box__col_xs_9">
        <GameMap />
      </div>
    </div>
  );
};
