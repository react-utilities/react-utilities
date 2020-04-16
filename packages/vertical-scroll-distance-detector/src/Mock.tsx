import * as React from 'react'
import { VerticalScrollDistanceConsumer, VerticalScrollDistanceProvider } from './index'

export const MockScrollDistanceImplementation: React.FunctionComponent = () => (
  <div className='Mock'>
    <VerticalScrollDistanceProvider>
      <VerticalScrollDistanceConsumer>
        {({ verticalScrollDistance }) => <div className='scroll-tracker'>{verticalScrollDistance}</div>}
      </VerticalScrollDistanceConsumer>
    </VerticalScrollDistanceProvider>
  </div>
)
