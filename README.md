# React Utilities

React Utilities to speed up and simplify React development 🏎💨

---

The goal of the project is to provide everyday components<br />
to speed up and simplify React development with little to no extra boilerplate code.

In this eco-system/monorepo, everyday React utilities can be implemented<br />
and tested so that users of this repository's utilities can use the <br />
provided utilities with confidence and without much thought.

---

## Packages

| Package                                                                                           | Utility                             |
| ------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [@react-utilities/vertical-scroll-distance-detector](/packages/vertical-scroll-distance-detector) | checks the vertical scroll distance |
| [@react-utilities/width-detector](/packages/width-detector)                                       | checks the width                    |

## Install

```sh

yarn add @react-utilities/some-react-utility

```

## Usage

In this section, how to use specific React Utilities will be supplied.

### Example

```typescript
import { SomeReactUtility } from '@react-utilities/some-react-utility'

const SomeReactComponent: FunctionComponent<SomeReactComponentProps> = (): JSX.Element => (
  <SomeReactUtility>
    <p>Foo</p>
  </SomeReactUtility>
)
```

---

## Development

Listed below are steps and commands for developing new React Utilities or fixing/updating current react utilities.

### Commands

Commands for developing React Utilities

- **`build`:** builds all packages in parallel
- **`clean`:** cleans up all build files for all packages
- **`ci`:** shortcut command to run CI-friendly conformance checks for `lint`, `typescript` checks, and `test`s
- **`lint`:** runs lint and auto-fixes code if necessary
- **`test`:** runs all tests
  - Shortcut for `jest`. You can pass any `jest` CLI flags to this command like `--watch`
- **`tsc`:** runs a `noEmit` Typescript check across all files.

---
