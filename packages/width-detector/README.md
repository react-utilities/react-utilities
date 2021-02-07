# @react-utilities/width-detector 🏎💨

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40react-utilities%2Fwidth-detector.svg)](https://badge.fury.io/js/%40react-utilities%2Fwidth-detector)

Detect element width using React Context.

---

## Install

```sh
pnpm install @react-utilities/width-detector
```

---

## Usage

```typescript
import React from 'react'
import { 
  WidthConsumer, 
  WidthProvider,
} from '@react-utilities/width-detector'

function App() {
  return (
    <div className="App">
      <WindowWidthProvider>
        <WindowWidthConsumer>
          {({ windowWidth }) => (
            <div className="window-width-tracker">
              {windowWidth}
            </div>
          )}
        </WindowWidthConsumer>
      </WindowWidthProvider>
    </div>
  )
}
```

---

## Demo

- [Width Detector Demo](https://codesandbox.io/s/react-context-window-width-detector-51od7)

---

## React Utilities 🏎💨

**Utilities for React to simplify development**

Everyday components for speeding up React development with little or no extra boilerplate code.

---

**View other [React Utilities](https://github.com/react-utilities/react-utilities).**

