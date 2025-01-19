import {TState} from 'app/model/types';
import {getList} from 'modules/common/lib/selectors';
import {unitName} from 'modules/unit/model/reducers';
import {TUnit, TUnitMap, TUnitStore} from 'modules/unit/model/types';
import {createSelector} from 'reselect';

export const selectUnit = (state: TState): TUnitStore => {
  return state[unitName] as TUnitStore;
};

export const selectUnitData = (state: TState): TUnitMap => {
  return selectUnit(state).data;
};

export const selectUnitIdList = (state: TState): string[] => {
  return selectUnit(state).list;
};

export const selectUnitList = createSelector(
  [selectUnitData, selectUnitIdList],
  getList
);

export const selectUnitItem = (id: string) => {
  return (state: TState): TUnit => {
    return selectUnitData(state)[id];
  };
};
