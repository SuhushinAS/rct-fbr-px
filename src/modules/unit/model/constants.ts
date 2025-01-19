export const unitIdKey = 'id';

export const getId = (colIndex: number, rowIndex: number) => {
  return [rowIndex, colIndex].join('_');
};
