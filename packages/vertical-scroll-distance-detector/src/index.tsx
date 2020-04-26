import debounce from 'lodash.debounce'
import * as React from 'react'

/**
 * React Vertical Scroll Distance Detector
 * ---
 * select element or use default window
 * get the scroll distance of the selected element
 * @param {child} react child element
 * @param {selector} string that is selected via `querySelectorAll`
 * @returns {reactElement}
 */

export interface Context {
  verticalScrollDistance: number
}

export interface VerticalScrollDistanceProviderProps {
  children: React.ReactChild | string
  selector?: string | undefined
}

const { Provider, Consumer } = React.createContext<Context>({
  verticalScrollDistance: 0,
})

export const VerticalScrollDistanceProvider: React.FunctionComponent<VerticalScrollDistanceProviderProps> = ({
  children,
  selector,
}) => {
  const [verticalScrollDistance, setVerticalScrollDistance] = React.useState(0)
  const el = selector ? document.querySelectorAll(selector)[0] : window
  React.useEffect(() => {
    const handleScroll = () => setVerticalScrollDistance(window.scrollY)
    handleScroll()
    el.addEventListener('scroll', debounce(handleScroll))
    return () => el.removeEventListener('scroll', debounce(handleScroll))
  }, [debounce])

  return <Provider value={{ verticalScrollDistance }}>{children}</Provider>
}

export const VerticalScrollDistanceConsumer: any = Consumer
