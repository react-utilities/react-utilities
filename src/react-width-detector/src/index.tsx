import React, { createContext, useEffect, useState, ReactChild } from "react";
import debounce from "lodash.debounce";

/**
 * React Width Selector
 * ---
 * select element or use default window
 * @param {child} react child element
 * @param {singleElement} string that is selected via `querySelectorAll`
 * @returns {reactElement}
 */

export interface Context {
  width: number
}

export interface WidthProviderProps {
  children: (props: any) => ReactChild
  singleElement?: string | null | undefined
}

const { Provider, Consumer } = createContext<Context>({ width: 0});

export const WidthProvider = ({ children, element }): JSX.Element => {
  const [width, setWidth] = useState(0);
  const el = element ? document.querySelectorAll(element)[0] : window
  useEffect(() => {
    const handleResize = () => setWidth(el.innerWidth);
    handleResize();
    el.addEventListener("resize", debounce(handleResize));
    return () => el.removeEventListener("resize", debounce(handleResize));
  }, [debounce]);

  return <Provider value={{ width }}>{children}</Provider>;
};

export const WidthConsumer = Consumer;