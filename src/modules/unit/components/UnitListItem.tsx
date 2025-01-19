import React from 'react';

type Props = {
  id: string;
};

export const UnitListItem = ({id}: Props) => {
  return <div>{id}</div>;
};
