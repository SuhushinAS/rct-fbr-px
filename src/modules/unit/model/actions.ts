import {useAppDispatch} from 'app/lib/hooks';
import {getId} from 'modules/unit/model/constants';
import {unitActions} from 'modules/unit/model/reducers';
import {TUnit} from 'modules/unit/model/types';
import {useEffect} from 'react';

const WIDTH = 5;
const HEIGHT = 5;
const GAP = 2;

export const useUnitGetList = (rows: number, cols: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = Array.from({length: rows * cols}).map<TUnit>((_, index) => {
      const rowIndex = Math.floor(index / cols);
      const colIndex = index % cols;

      return {
        height: HEIGHT,
        id: getId(rowIndex, colIndex),
        isHover: false,
        isSelect: false,
        width: WIDTH,
        x: (WIDTH + GAP) * colIndex,
        y: (HEIGHT + GAP) * rowIndex,
      };
    });

    dispatch(unitActions.getList(data));
  }, [cols, dispatch, rows]);
};
