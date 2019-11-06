import React, { createContext, FunctionComponent, ReactChild, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

/**
 * React Width Detector
 * ---
 * select element or use default window
 * get the width of an element or window
 * @param {child} react child element
 * @param {singleElement} string that is selected via `querySelectorAll`
 * @returns {reactElement}
 */

export interface Context {
  width: number;
}

export interface WidthProviderProps {
  children: (props: any) => ReactChild;
  singleElement?: string | null | undefined;
}

const { Provider, Consumer } = createContext<Context>({ width: 0 });

export const WidthProvider: FunctionComponent<WidthProviderProps> = ({ children, singleElement }): JSX.Element => {
  const [width, setWidth] = useState(0);
  const el: any = singleElement ? document.querySelectorAll(singleElement)[0] : window;
  const elWidth = el !== window ? el.offsetWidth : el.innerWidth;
  useEffect(() => {
    const handleResize = () => setWidth(elWidth);
    handleResize();
    el.addEventListener('resize', debounce(handleResize));
    return () => el.removeEventListener('resize', debounce(handleResize));
  }, [debounce]);

  return <Provider value={{ width }}>{children}</Provider>;
};

export const WidthConsumer = Consumer;
