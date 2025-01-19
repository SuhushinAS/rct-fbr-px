import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getId, getNormalize} from 'modules/common/lib/normalize';
import {unitIdKey} from 'modules/unit/model/constants';
import {TUnit, TUnitStore} from 'modules/unit/model/types';

const getUnitId = getId<TUnit>(unitIdKey);

const normalizeUnit = getNormalize<TUnit>(getUnitId);

const initialState: TUnitStore = {
  data: {},
  list: [],
};

export const unit = createSlice({
  initialState,
  name: 'unit',
  reducers: {
    getList(state, {payload}: PayloadAction<TUnit[]>) {
      return {...state, ...normalizeUnit(payload)};
    },
  },
});

export const unitActions = unit.actions;
export const unitName = unit.name;
export const unitReducer = unit.reducer;
