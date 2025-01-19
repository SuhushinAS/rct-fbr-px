import React, {ReactNode} from 'react';
import {
  GameMapContainerContext,
  GameMapContainerContextProps,
} from 'modules/game-map/components/GameMapContainerContext';

type Props = {
  children: ReactNode;
  value: GameMapContainerContextProps;
};

export const GameMapContainerInner = ({children, value}: Props) => {
  if (null === value) {
    return null;
  }

  return (
    <GameMapContainerContext.Provider value={value}>
      {children}
    </GameMapContainerContext.Provider>
  );
};
