import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from 'modules/game-map/components/GameMapContainer.module.less';
import {GameMapContainerInner} from 'modules/game-map/components/GameMapContainerInner';
import {GameMapContainerContextProps} from 'modules/game-map/components/GameMapContainerContext';

type Props = {children: ReactNode};

export const GameMapContainer = ({children}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<GameMapContainerContextProps>(null);

  const initValue = useCallback((div: HTMLDivElement) => {
    setValue({
      height: Math.floor(div.clientHeight - 10),
      width: Math.floor(div.clientWidth - 10),
    });
  }, []);

  useEffect(() => {
    const divElement = containerRef.current;

    if (null !== divElement) {
      const onWindowResize = () => initValue(divElement);

      onWindowResize();

      window.removeEventListener('resize', onWindowResize);
      window.addEventListener('resize', onWindowResize);
    }
  }, [initValue]);

  return (
    <div className={s.GameMapContainer} ref={containerRef}>
      <GameMapContainerInner value={value}>{children}</GameMapContainerInner>
    </div>
  );
};
