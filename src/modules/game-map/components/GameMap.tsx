import React from 'react';
import {GameMapContainer} from 'modules/game-map/components/GameMapContainer';
import {GameMapStage} from 'modules/game-map/components/GameMapStage';

export const GameMap = () => {
  return (
    <GameMapContainer>
      <GameMapStage />
    </GameMapContainer>
  );
};
