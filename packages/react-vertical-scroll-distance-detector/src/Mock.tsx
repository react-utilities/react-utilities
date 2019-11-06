import React, { FunctionComponent } from 'react'
import {
  VerticalScrollDistanceConsumer,
  VerticalScrollDistanceProvider
} from '..'

export const MockScrollDistanceImplementation: FunctionComponent = () => (
  <div className="Mock">
    <VerticalScrollDistanceProvider>
      <VerticalScrollDistanceConsumer>
        {({ verticalScrollDistance }) => (
          <div className="scroll-tracker">{verticalScrollDistance}</div>
        )}
      </VerticalScrollDistanceConsumer>
    </VerticalScrollDistanceProvider>
  </div>
)
