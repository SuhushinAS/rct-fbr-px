export type TUnitStore = {
  data: TUnitMap;
  list: string[];
};

export type TUnitMap = Record<string, TUnit>;

export type TUnit = {
  height: number;
  id: string;
  isHover: boolean;
  isSelect: boolean;
  width: number;
  x: number;
  y: number;
};
