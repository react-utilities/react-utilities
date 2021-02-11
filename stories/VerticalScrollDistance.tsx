import React from 'react'
import {
  useVerticalScrollDistance,
  VerticalScrollDistanceProvider,
  VerticalScrollDistanceConsumer,
} from '../packages/vertical-scroll-distance-detector/src/index'

export const VerticalScrollDistance = (): JSX.Element => (
  <div style={{ fontFamily: 'sans-serif', height: '300rem', position: 'relative', textAlign: 'center', width: '100%' }}>
    <p>Scroll down to detect the vertical scroll change</p>
    <VerticalScrollDistanceProvider>
      <VerticalScrollDistanceConsumer>
        {(verticalScrollDistance): JSX.Element => (
          <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '1rem', position: 'sticky', top: 0 }}>
            {verticalScrollDistance}
          </div>
        )}
      </VerticalScrollDistanceConsumer>
    </VerticalScrollDistanceProvider>
  </div>
)

export const DistanceScrolled = (): JSX.Element => {
  const distanceScrolled = useVerticalScrollDistance()
  return <>{distanceScrolled}</>
}

export const VerticalScrollDistanceWithHook = (): JSX.Element => (
  <div style={{ fontFamily: 'sans-serif', height: '300rem', position: 'relative', textAlign: 'center', width: '100%' }}>
    <p>Scroll down to detect the vertical scroll change</p>
    <VerticalScrollDistanceProvider>
      <div style={{ backgroundColor: 'blue', color: '#ffffff', padding: '1rem', position: 'sticky', top: 0 }}>
        <DistanceScrolled />
      </div>
    </VerticalScrollDistanceProvider>
  </div>
)
