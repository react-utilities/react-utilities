import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
  useVerticalScrollDistance,
  VerticalScrollDistanceProvider,
  VerticalScrollDistanceContext,
  VerticalScrollDistanceConsumer,
} from '../index'

describe('VerticalScrollDistanceDetector', () => {
  describe('confirm functions exist', () => {
    it('VerticalScrollDistanceProvider exists', () => expect(VerticalScrollDistanceProvider).toBeDefined())
    it('VerticalScrollDistanceConsumer exists', () => expect(VerticalScrollDistanceContext).toBeDefined())
    it('useVerticalScrollDistance exists', () => expect(useVerticalScrollDistance).toBeDefined())
    it('VerticalScrollDistanceConsumer exists', () => expect(VerticalScrollDistanceConsumer).toBeDefined())
  })

  describe('VerticalScrollDistanceConsumer', () => {
    it('renders a default value of 0', () => {
      render(
        <VerticalScrollDistanceConsumer>
          {(verticalScrollDistance): JSX.Element => <div className='scroll-tracker'>{verticalScrollDistance}</div>}
        </VerticalScrollDistanceConsumer>,
      )
      expect(screen.getByText(/^0/)).toHaveTextContent('0')
    })
  })

  describe('useVerticalScrollDistance', () => {
    const Result = (): JSX.Element => {
      const result = useVerticalScrollDistance()
      return <div>{result}</div>
    }
    it('returns a default value of 0', () => {
      render(
        <VerticalScrollDistanceProvider>
          <Result />
        </VerticalScrollDistanceProvider>,
      )
      expect(screen.getByText(/^0/)).toHaveTextContent('0')
    })
  })

  describe('VerticalScrollDistanceProvider', () => {
    it('returns children', () => {
      render(
        <VerticalScrollDistanceProvider>
          <div>foo</div>
        </VerticalScrollDistanceProvider>,
      )
      expect(screen.getByText(/^foo/)).toHaveTextContent('foo')
    })
  })

  describe('VerticalScrollDistanceConsumer', () => {
    const customRender = (ui, { scrollPosition, ...renderOptions }: unknown): unknown => {
      return render(
        <VerticalScrollDistanceContext.Provider value={scrollPosition}>{ui}</VerticalScrollDistanceContext.Provider>,
        renderOptions,
      )
    }
    it('returns children with updated scroll distance', () => {
      customRender(
        <VerticalScrollDistanceConsumer>
          {(verticalScrollDistance): JSX.Element => <div className='scroll-tracker'>{verticalScrollDistance}</div>}
        </VerticalScrollDistanceConsumer>,
        { scrollPosition: 100 },
      )
      expect(screen.getByText(/^100/)).toHaveTextContent('100')
    })
  })
})
