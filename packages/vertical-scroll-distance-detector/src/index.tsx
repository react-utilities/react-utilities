import * as React from 'react'

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
  children: React.ReactChild | string
  delay: number
  selector?: string | undefined
}

type Fn = (args: unknown) => void

const debounce = (fn: Fn, delay: number): Fn => {
  let inDebounce = null
  return (args: unknown): void => {
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => fn(args), delay)
  }
}

const { Provider, Consumer } = React.createContext<Context>({
  verticalScrollDistance: 0,
})

export const VerticalScrollDistanceProvider: React.FunctionComponent<VerticalScrollDistanceProviderProps> = ({
  children,
  delay = 10,
  selector,
}) => {
  const [verticalScrollDistance, setVerticalScrollDistance] = React.useState(0)
  const el = selector ? document.querySelectorAll(selector)[0] : window
  React.useEffect(() => {
    const handleScroll = () => setVerticalScrollDistance(window.scrollY)
    handleScroll()
    el.addEventListener('scroll', debounce(handleScroll, delay))
    return () => el.removeEventListener('scroll', debounce(handleScroll, delay))
  }, [debounce])

  return <Provider value={{ verticalScrollDistance }}>{children}</Provider>
}

export const VerticalScrollDistanceConsumer: any = Consumer
