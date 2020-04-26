# React Utilities 🏎💨

Utilities for React to speed up and simplify development

---

This project provides everyday components<br />
for speeding up and simplifying React development with little to no extra boilerplate code.

- In this eco-system/monorepo, everyday React utilities are implemented and tested
- A pattern of utility and recipe is established for easy implementation and development
- This means users can use install **React Utilities** with confidence and without thought

---

## Packages

| Package                                                                                           | Utility                             |
| ------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [@react-utilities/vertical-scroll-distance-detector](/packages/vertical-scroll-distance-detector) | checks the vertical scroll distance |
| [@react-utilities/width-detector](/packages/width-detector)                                       | checks the width                    |

## Glossary

Below are sectioned descriptions and usages of each implemented React Utility.

### [Vertical-scroll-distance-detector](/packages/vertical-scroll-distance-detector)

Detects the vertical scroll distance of window or an element.

### [Width-detector](/packages/width-detector)

Detects the width of the window or an element.

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
