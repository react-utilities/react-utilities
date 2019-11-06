import React, { FunctionComponent } from 'react';
import { VerticalScrollDistanceConsumer, VerticalScrollDistanceProvider } from '..';

export interface MockScrollDistanceImplementationProps {}

export const MockScrollDistanceImplementation: FunctionComponent<MockScrollDistanceImplementationProps> = () => (
  <div className="Mock">
    <VerticalScrollDistanceProvider>
      <VerticalScrollDistanceConsumer>
        {({ verticalScrollDistance }) => <div className="scroll-tracker">{verticalScrollDistance}</div>}
      </VerticalScrollDistanceConsumer>
    </VerticalScrollDistanceProvider>
  </div>
);
