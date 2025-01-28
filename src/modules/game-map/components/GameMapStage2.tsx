import {useGameMapContainerContext} from 'modules/game-map/components/GameMapContainerContext';
import React from 'react';
import {Stage, Text} from 'react-pixi-fiber';

export const GameMapStage2 = () => {
  const {height, width} = useGameMapContainerContext();

  return (
    <Stage
      options={{
        backgroundColor: 0xffffff,
        height,
        resolution: window.devicePixelRatio,
        width,
      }}
    >
      <Text />
    </Stage>
  );
};
