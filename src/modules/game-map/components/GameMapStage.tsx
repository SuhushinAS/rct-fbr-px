import React from 'react';
import {useGameMapContainerContext} from 'modules/game-map/components/GameMapContainerContext';
import {Stage} from '@pixi/react';

export const GameMapStage = () => {
  const {height, width} = useGameMapContainerContext();

  return (
    <Stage
      height={height}
      options={{
        antialias: true,
        autoDensity: true,
        backgroundColor: 0x56789a,
        resolution: window.devicePixelRatio,
      }}
      width={width}
    ></Stage>
  );
};
