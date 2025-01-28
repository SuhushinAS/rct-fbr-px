import {GameMapContainer} from 'modules/game-map/components/GameMapContainer';
import {GameMapStage2} from 'modules/game-map/components/GameMapStage2';
import React from 'react';

export const GameMap = () => {
  return (
    <GameMapContainer>
      <GameMapStage2 />
    </GameMapContainer>
  );
};
