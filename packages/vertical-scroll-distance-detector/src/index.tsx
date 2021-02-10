import React, { createContext, useContext, useState, useEffect, FunctionComponent } from 'react'

/**
 * React Vertical Scroll Distance Detector 🏎💨å
 * ---
 * @description select element or use default window
 * @purpose get the scroll distance of the selected element
 * @param {child} react child element
 * @param {selector} string that is selected via `querySelectorAll`
 * @returns {reactElement}
 */

export interface Context {
  verticalScrollDistance: number
}

export interface VerticalScrollDistanceProviderProps {
  children?: (string | Element)[] | any
  delay?: number
  selector?: string | undefined
}

type Fn = (args: unknown) => void

/**
 * debounce
 * ---
 * @description a basic implementation of debounce
 * @param fn a funciton callback
 * @param delay a number in milliseconds
 */
export const debounce = (fn: Fn, delay: number): Fn => {
  let inDebounce = null
  return (args: unknown): void => {
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => fn(args), delay)
  }
}

/**
 * VerticalScrollDistanceContext
 * @description initiates the scroll distance context
 */
export const VerticalScrollDistanceContext = createContext<number>(0)

/**
 * VerticalScrollDistanceProvider
 * @description provides the logic of the scroll distance
 * @param VerticalScrollDistanceProviderProps
 * @returns {React.ReactElement}
 */
export const VerticalScrollDistanceProvider: FunctionComponent<VerticalScrollDistanceProviderProps> = ({
  children,
  delay = 10,
  selector,
}) => {
  const [verticalScrollDistance, setVerticalScrollDistance] = useState(0)
  const el = selector ? document.querySelector(selector) : window
  useEffect(() => {
    const handleScroll = (): void => setVerticalScrollDistance(window.scrollY)
    handleScroll()
    el.addEventListener('scroll', debounce(handleScroll, delay))
    return (): void => el.removeEventListener('scroll', debounce(handleScroll, delay))
  }, [debounce])
  return (
    <VerticalScrollDistanceContext.Provider value={verticalScrollDistance}>
      {children}
    </VerticalScrollDistanceContext.Provider>
  )
}

/**
 * useVerticalScrollDistance
 * @returns the scroll distance number of an element within an element
 */
export const useVerticalScrollDistance = (): number => {
  const distanceScrolled = useContext(VerticalScrollDistanceContext)
  return distanceScrolled
}

/**
 * VerticalScrollDistanceConsumer
 * @description provides fallback support for pre-hooks
 */
export const VerticalScrollDistanceConsumer: React.Consumer<number> = VerticalScrollDistanceContext.Consumer
