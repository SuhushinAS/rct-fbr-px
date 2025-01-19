import {useAppSelector} from 'app/lib/hooks';
import {GameMapUnit} from 'modules/game-map/components/GameMapUnit';
import {selectUnitIdList} from 'modules/unit/model/selectors';
import React from 'react';

export const GameMapUnitList = () => {
  const unitIdList = useAppSelector(selectUnitIdList);

  return (
    <>
      {unitIdList.map((unitId) => {
        return <GameMapUnit key={unitId} unitId={unitId} />;
      })}
    </>
  );
};
