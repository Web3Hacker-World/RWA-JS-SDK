<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
    <img alt="RWA logo" src="./assets/logo-light.svg" width="auto" height="60">
  </picture>
</p>

<p align="center">
  RWA-JS-SDK
<p>

<br>

The RWA JavaScript SDK provides developers with a framework for implementing RWA functionality into their own applications.

It built on top of Vite 4.x and generates a hybrid package - both support for CommonJS and ESM modules.

## Features

- 🚀 API for working with RWA wallets, ENS, contracts, transactions, signing, etc.
- 💼 Built-in wallet connectors for RWA Wallet.
- 👟 Caching, request deduplication, multicall, batching, and persistence for RWA Logic.
- 🌀 Auto-refresh data on wallet, block, and network changes
- 👫🏽 Hybrid support - CommonJS and ESM modules
- 🥷 IIFE bundle for direct browser support without bundler
- 🎓 Typings bundle
- 🧙‍♂️ ESLint - scripts linter
- 💄 Stylelint - styles linter
- 💃🏻 Prettier - formatter
- 👨‍✈️ Vitest - test framework
- 🕵️‍♂️ Husky + lint-staged - pre-commit git hook set up for formatting

## Usage

The starter contains the following scripts:

- `dev` - starts dev server
- `build` - generates the following bundles: CommonJS (`.cjs`) ESM (`.mjs`) and IIFE (`.iife.js`). The name of bundle is automatically taken from `package.json` name property
- `test` - starts vitest and runs all tests
- `test:coverage` - starts vitest and run all tests with code coverage report
- `lint:scripts` - lint `.ts` files with eslint
- `lint:styles` - lint `.css` and `.scss` files with stylelint
- `format:scripts` - format `.ts`, `.html` and `.json` files with prettier
- `format:styles` - format `.cs` and `.scss` files with stylelint
- `format` - format all with prettier and stylelint
- `prepare` - script for setting up husky pre-commit hook
- `uninstall-husky` - script for removing husky from repository

## Credit

The SDK is basic on the awesome starter: <https://github.com/kbysiec/vite-vanilla-ts-lib-starter>
