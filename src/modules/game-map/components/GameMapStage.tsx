import {Stage} from '@pixi/react';
import {useGameMapContainerContext} from 'modules/game-map/components/GameMapContainerContext';
import {GameMapUnitList} from 'modules/game-map/components/GameMapUnitList';
import React from 'react';
import {ReactReduxContext} from 'react-redux';

export const GameMapStage = () => {
  const {height, width} = useGameMapContainerContext();

  return (
    <ReactReduxContext.Consumer>
      {(value) => {
        return (
          <Stage
            height={height}
            options={{
              antialias: true,
              autoDensity: true,
              backgroundColor: 0xffffff,
              resolution: window.devicePixelRatio,
            }}
            width={width}
          >
            <ReactReduxContext.Provider value={value}>
              <GameMapUnitList />
            </ReactReduxContext.Provider>
          </Stage>
        );
      }}
    </ReactReduxContext.Consumer>
  );
};
