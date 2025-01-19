import React from 'react';
import {useAppSelector} from 'app/lib/hooks';
import {selectUnitIdList} from 'modules/unit/model/selectors';
import {UnitListItem} from 'modules/unit/components/UnitListItem';

export const UnitList = () => {
  const unitIdList = useAppSelector(selectUnitIdList);

  return (
    <div>
      {unitIdList.map((unitId) => (
        <UnitListItem id={unitId} key={unitId} />
      ))}
    </div>
  );
};
