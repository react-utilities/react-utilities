# @react-utilities/vertical-scroll-distance-detector 🏎💨

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40react-utilities%2Fvertical-scroll-distance-detector.svg)](https://badge.fury.io/js/%40react-utilities%2Fvertical-scroll-distance-detector)

Detects the distance an element has been scrolled with React context.

---

## Install

```sh
pnpm install @react-utilities/vertical-scroll-distance-detector
# npm install react-utilities/vertical-scroll-distance-detector
# yarn add react-utilities/vertical-scroll-distance-detector
```

---

## Usage

React 16.3+ Version

```typescript
import React from 'react'
import { 
  VerticalScrollDistanceConsumer, 
  VerticalScrollDistanceProvider,
} from '@react-utilities/vertical-scroll-distance-detector'

function App() {
  return (
    <div className="App">
      <h1>React Context Scroll Distance Detector</h1>
      <VerticalScrollDistanceProvider>
        <VerticalScrollDistanceConsumer>
          {({ verticalScrollDistance }) => (
            <div className="scroll-tracker">
              {verticalScrollDistance}
            </div>
          )}
        </VerticalScrollDistanceConsumer>
      </VerticalScrollDistanceProvider>
    </div>
  )
}
```

With React Hooks

```typescript
import React from 'react'
import { 
  useVerticalScrollDistance,
  VerticalScrollDistanceProvider,
} from '@react-utilities/vertical-scroll-distance-detector'


/**
 * add this hook anywhere within the VerticalScrollDistanceProvider
 */
const VerticalScollDistanceIndicator = () => {
  const distanceScrolled = useVerticalScrollDistance();
  return <>{distanceScrolled}</>;
};

function App() {
  return (
    <div className="App">
      <h1>React Context Scroll Distance Detector</h1>
      <VerticalScrollDistanceProvider>
        <VerticalScollDistanceIndicator />
      </VerticalScrollDistanceProvider>
    </div>
  )
}
```

---

## Demo

- [Vertical Scroll Distance Detector Demo React 16.3+](https://codesandbox.io/s/react-context-vertical-scroll-distance-detector-lgtui)
- [Vertical Scroll Distance Detector Demo React with React Hook](https://codesandbox.io/s/react-context-vertical-scroll-distance-detector-hook-1yve5)

---

## React Utilities 🏎💨

**Utilities for React to simplify development**

Everyday components for speeding up React development with little or no extra boilerplate code.

---

**View other [React Utilities](https://github.com/react-utilities/react-utilities).**


