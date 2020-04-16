import debounce from 'lodash.debounce'
import * as React from 'react'

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
  verticalScrollDistance: number
}

export interface VerticalScrollDistanceProviderProps {
  children: any
  singleElement?: string | null | undefined
}

const { Provider, Consumer } = React.createContext<Context>({
  verticalScrollDistance: 0,
})

export const VerticalScrollDistanceProvider: React.FunctionComponent<VerticalScrollDistanceProviderProps> = ({
  children,
  singleElement,
}) => {
  const [verticalScrollDistance, setVerticalScrollDistance] = React.useState(0)
  const el = singleElement ? document.querySelectorAll(singleElement)[0] : window
  React.useEffect(() => {
    const handleScroll = () => setVerticalScrollDistance(window.scrollY)
    handleScroll()
    el.addEventListener('scroll', debounce(handleScroll))
    return () => el.removeEventListener('scroll', debounce(handleScroll))
  }, [debounce])

  return <Provider value={{ verticalScrollDistance }}>{children}</Provider>
}

export const VerticalScrollDistanceConsumer: any = Consumer
