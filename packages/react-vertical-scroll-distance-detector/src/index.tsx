import debounce from 'lodash.debounce'
import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState
} from 'react'

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

const { Provider, Consumer } = createContext<Context>({
  verticalScrollDistance: 0
})

export const VerticalScrollDistanceProvider: FunctionComponent<
  VerticalScrollDistanceProviderProps
> = ({ children, singleElement }) => {
  const [verticalScrollDistance, setVerticalScrollDistance] = useState(0)
  const el = singleElement
    ? document.querySelectorAll(singleElement)[0]
    : window
  useEffect(() => {
    const handleScroll = () => setVerticalScrollDistance(window.scrollY)
    handleScroll()
    el.addEventListener('scroll', debounce(handleScroll))
    return () => el.removeEventListener('scroll', debounce(handleScroll))
  }, [debounce])

  return <Provider value={{ verticalScrollDistance }}>{children}</Provider>
}

export const VerticalScrollDistanceConsumer: any = Consumer

export const WidthConsumer = Consumer
