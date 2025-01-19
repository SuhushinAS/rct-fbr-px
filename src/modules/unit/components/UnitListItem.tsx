import React from 'react';

type Props = {
  unitId: string;
};

export const UnitListItem = ({unitId}: Props) => {
  return <div>{unitId}</div>;
};
