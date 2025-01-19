import type {ColorSource} from '@pixi/core';
import {Graphics as PixiGraphics} from '@pixi/graphics';
import {Graphics} from '@pixi/react';
import {useAppSelector} from 'app/lib/hooks';
import {selectUnitItem} from 'modules/unit/model/selectors';
import React, {useCallback} from 'react';

type Props = {
  unitId: string;
};

const getColor = (isHover: boolean, isSelect: boolean): ColorSource => {
  if (isSelect) {
    return 0x00cc00;
  }

  if (isHover) {
    return 0xcc88ff;
  }

  return 0xcccccc;
};

const isFastRect = () => true;

export const GameMapUnit = ({unitId}: Props) => {
  const {height, isHover, isSelect, width, x, y} = useAppSelector(
    selectUnitItem(unitId)
  );

  const draw = useCallback(
    (g: PixiGraphics) => {
      g.clear();
      g.beginFill(getColor(isHover, isSelect));
      g.drawRect(x, y, width, height);
      g.endFill();
    },
    [height, isHover, isSelect, width, x, y]
  );

  return <Graphics draw={draw} isFastRect={isFastRect} />;
};
