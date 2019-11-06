# React Utilities

React Utilities to speed up and simplify development 🏎

The goal of the project is to provide everyday components, in example window scroll detection, to speed up and simplify React development with little to no extra boilerplate code. In this eco-system/monorepo, everyday React utilities can be implemented and tested so that users of this repository's utilities can use the provided utilities with confidence and without much thought.

----

## Usage

In this section, how to use specific React Utilities will be supplied.

```typescript

import { SomeReactUtility } from '@react-utilities/some-react-utility

const SomeReactComponent: FunctionComponent<SomeReactComponentProps> = (): JSX.Element => 
  (<SomeReactUtility><p>Foo</p></SomeReactUtility>)

```

----

## Development

Listed below are steps and commands for developing new React Utilities or fixing/updating current react utilities.

### Commands

Commands for developing React Utilities

* #### `build`
  * Builds all packages in parallel
* #### `clean`
  * Cleans up all build files for all packages
* #### `ci`
  * Shortcut command to run CI-friendly conformance checks for `lint`, `typescript` checks, and `test`s.
* #### `lint`
  * Runs lint and auto-fixes code if necessary.
* #### `test`
  * Runs all tests.
  * Shortcut for `jest`. You can pass any `jest` CLI flags to this command like `--watch`
* #### `tsc`
  * Runs a `noEmit` Typescript check across all files.

----

## Thanks

This project is being built referencing [Paul Armstrong](https://github.com/paularmstrong)'s [Monorepo TS](https://github.com/paularmstrong/monorepo-ts) with additions for better react development supplied by me, Jeff Wainwright.


