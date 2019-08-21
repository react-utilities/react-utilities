import React, { FunctionComponent, ReactChild } from "react";
/**
 * React Vertical Scroll Distance Detector
 * ---
 * select element or use default window
 * get the scroll distance of the selected element
 * @param {child} react child element
 * @param {singleElement} string that is selected via `querySelectorAll`
 * @returns {reactElement}
 */
export interface Context {
    verticalScrollDistance: number;
}
export interface VerticalScrollDistanceProviderProps {
    children: (props: any) => ReactChild;
    singleElement?: string | null | undefined;
}
export declare const VerticalScrollDistanceProvider: FunctionComponent<VerticalScrollDistanceProviderProps>;
export declare const VerticalScrollDistanceConsumer: React.ExoticComponent<React.ConsumerProps<Context>>;
export declare const WidthConsumer: React.ExoticComponent<React.ConsumerProps<Context>>;
