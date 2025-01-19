import React, {useContext} from 'react';

type Value = {
  height: number;
  width: number;
};

export type GameMapContainerContextProps = Value | null;

export const GameMapContainerContext =
  React.createContext<GameMapContainerContextProps>(null);

export const useGameMapContainerContext = () => {
  const gameMapContainerContext = useContext(GameMapContainerContext);

  if (undefined === gameMapContainerContext) {
    throw new Error(
      'useGameMapContainerContext must be used within a GameMapContainerContext'
    );
  }

  if (null === gameMapContainerContext) {
    throw new Error(
      'useGameMapContainerContext must be used within a GameMapContainerContext'
    );
  }

  return gameMapContainerContext;
};
