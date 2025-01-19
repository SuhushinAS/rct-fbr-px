import {TUnit} from 'modules/unit/model/types';
import {unitActions} from 'modules/unit/model/reducers';
import {useAppDispatch} from 'app/lib/hooks';

const WIDTH = 10;
const HEIGHT = 10;
const GAP = 5;

export const useUnitGetList = (rows: number, cols: number) => {
  const dispatch = useAppDispatch();

  const data = Array.from({length: rows * cols}).map<TUnit>((_, index) => {
    const rowIndex = Math.floor(index / cols);
    const colIndex = index % cols;

    return {
      height: HEIGHT,
      id: [rowIndex, colIndex].join('_'),
      isHover: false,
      isSelect: false,
      width: WIDTH,
      x: (WIDTH + GAP) * colIndex,
      y: (HEIGHT + GAP) * rowIndex,
    };
  });

  dispatch(unitActions.getList(data));
};
