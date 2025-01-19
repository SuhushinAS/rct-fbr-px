import {useAppDispatch} from 'app/lib/hooks';
import {getId} from 'modules/unit/model/constants';
import {unitActions} from 'modules/unit/model/reducers';
import React, {useCallback, useEffect} from 'react';

type Props = {
  cols: number;
  rows: number;
};

export const GameControl = ({cols, rows}: Props) => {
  const dispatch = useAppDispatch();

  const getUpdateUnit = useCallback(() => {
    const colIndex = Math.floor(Math.random() * cols);
    const rowIndex = Math.floor(Math.random() * rows);
    const id = getId(rowIndex, colIndex);
    const isHover = Boolean(Math.round(Math.random()));
    const isSelect = Boolean(Math.round(Math.random()));

    return {id, isHover, isSelect};
  }, [cols, rows]);

  const updateUnit = useCallback(() => {
    dispatch(unitActions.update(getUpdateUnit()));
  }, [dispatch, getUpdateUnit]);

  const tick = useCallback(() => {
    return setTimeout(() => {
      updateUnit();
      tick();
    });
  }, [updateUnit]);

  useEffect(() => {
    const timeout = tick();

    return () => {
      clearTimeout(timeout);
    };
  }, [tick, updateUnit]);

  return <form>GameControl</form>;
};
