import React, { createContext, FunctionComponent, ReactChild, useEffect, useState } from 'react'

/**
 * React Width Detector 🏎💨
 * ---
 * @description select element or use default window
 * @purpose provides the width of an element or window
 * @param {child} react child element
 * @param {selector} string that is selected via `querySelectorAll`
 * @returns {reactElement}
 */

export type WidthContext = {
  width: number
}

export type WidthProviderProps = {
  children: (props: ReactChild) => ReactChild
  delay?: number
  selector?: string | Window | undefined
}

type Fn = (args: unknown) => void

const debounce = (fn: Fn, delay: number): Fn => {
  let inDebounce = null
  return (args: unknown): void => {
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => fn(args), delay)
  }
}

const { Provider, Consumer } = createContext<WidthContext>({ width: 0 })

export const WidthProvider: FunctionComponent<WidthProviderProps> = ({
  children,
  delay = 10,
  selector = window,
}): JSX.Element => {
  const [width, setWidth] = useState(0)
  if (!selector) return
  const el: any = typeof selector === 'string' ? document.querySelector(selector) : window
  const elWidth = el !== window ? el.offsetWidth : el.innerWidth
  useEffect(() => {
    const handleResize = (): void => setWidth(elWidth)
    handleResize()
    el.addEventListener('resize', debounce(handleResize, delay))
    return (): void => el.removeEventListener('resize', debounce(handleResize, delay))
  }, [debounce])

  return <Provider value={{ width }}>{children}</Provider>
}

export const WidthConsumer = Consumer
