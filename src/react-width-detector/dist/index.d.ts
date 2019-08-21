import React, { FunctionComponent, ReactChild } from "react";
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
export declare const WidthProvider: FunctionComponent<WidthProviderProps>;
export declare const WidthConsumer: React.ExoticComponent<React.ConsumerProps<Context>>;
