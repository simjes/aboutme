---
path: '/blog/angular-jest'
date: '03-12-2019'
title: 'Replace Karma with Jest - Angular'
tags:
  - 'angular'
  - 'jest'
---

## The Problem

I recently entered a new project with an Angular tech stack, and I was bummed that it didn't use `Jest`. I thought it would be fine, but running the tests in `Karma` is so unbearably slow and it was hard to debug, so I had to do something about it.

There is always a cost to changing up things, but the transition to `Jest` is pretty simple, as we will see.

## My Requirements

I had some requirements that I wanted to achieve if we were going to convert to `Jest`. The tests need to run faster, thats a given, but I also want a better and faster debugging experience. `vscode-jest` will give us that. When the project is converted, it is also possible to use `@testing-libray/angular`, which encourages better testing practices, and we will be able to do snapshot testing.

## Overview

1. [Remove Karma](#1.-remove-karma)
2. [Add jest-preset-angular](#2.-add-and-configure-jest-preset-angular)
3. [Run test converter](#3.-run-test-converter)
4. [Add scripts](#4.-add-scripts)
5. [vscode-jest setup](#5.-vscode-jest-setup)

## 1. Remove Karma

Removing Karma is pretty simple, just remove dependencies and delete the setup files.

```bash
npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
rm ./src/karma.conf.js ./src/test.ts
```

You will also have to remove `test.ts` from `files` in `./src/tsconfig.spec.json`.

## 2. Add and configure jest-preset-angular

To get going we have to install some dependencies

```bash
npm install -D jest jest-preset-angular @types/jest
```

Now there is some setup required.
The first file we will create is for setting up `Jest` to work with TypeScript.
Create `setupJest.ts` in the root directory of your project.

```typescript
// setupJest.ts

import 'jest-preset-angular';
import './jestGlobalMocks'; // browser mocks globally available for every test
```

Now what is `jestGlobalMocks` you might ask. This is a setup file for mocks that will be available for every test.
A difference between `Karma` and `Jest` is that the latter will run in `jsdom` which is emulates a browser, while the former will actually run in the browser. This means that with `Jest` not every browser API will be available, so we will mock it. Create `jestGlobalMocks.ts` in your root folder. The following configuration is from `jest-preset-angular` examples.

```typescript
// jestGlobalMocks.ts

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
```

Last but no least, we have to configure `Jest` itself. Create a `jest.config.js` file in your root folder.

```javascript
// jest.config.js

const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/environments/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/environments/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
```

Ok, so there is a lot going on here, lets go through it:

- `preset`: The base of your configuration.
- `setupFilesAfterEnv`: A list of paths to modules that run some code to configure or set up the testing framework before each test.
- `globals`: A set of global variables that need to be available in all test environments. In this case we overwrite the standard `ts-jest` configuration, as in my project `tsconfig.spect.json` was not placed in the root folder. If yours is, then you can exclude the `globals` object. The default configuration can be seen [here](https://github.com/thymikee/jest-preset-angular/blob/master/jest-preset.js).
- `testPathIgnorePatterns` and `coveragePathIgnorePatterns`: Regex patterns of paths we want to skip testing and test coverage.
- `moduleNameMapper`: This is only require if you have defined [alias paths](https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353) for module resolution in your `tsconfig.json` file. TODOCHECK: esModuleInterop

There is of course a lot of other things you can configure, more on that in the offical [Jest documentation](https://jestjs.io/docs/en/configuration).

### Configure typings

We also have to setup the correct types in our TypeScript configurations. Add `jest` in `compilerOptions.types` array in both `./tsconfig.json`(Used by our IDE) and `./src/tsconfig.spec.json`(Used by `Jest`).

```json
{
  //...
  "compilerOptions": {
    // ...
    "types": [
      //...
      "jest"
    ]
  }
  // ...
}
```

## 3. Run test converter

So we are ready to go, but our tests are still using the `jasmine` API. Luckly `jest-codemods` will help us automagically convert most of our tests. The following will steps us through some convertion options:

```bash
npx jest-codemods
```

After `jest-codemods` is done, you can run `npx jest` in your project to see if the tests run as expected.
There are some gotchas that you should know about when switching to `Jest`, check out [Ali Kamalizade's](https://itnext.io/how-to-use-jest-in-angular-aka-make-unit-testing-great-again-e4be2d2e92d1) post for more on that.

## 4. Add scripts

Having replaced `Karma`, we should update our scripts in `package.json`.

```json
// package.json

{
  // ...
  "scripts": {
    // ...
    "test": "jest"
  }
}
```

## 5. vscode-jest setup

Now that our tests are running, we should make use of the excelent vscode plugin for showing test status as we code. Install `vscode-jest` and add the following to your `settings.json`, afterwards you have to restart the `vscode-jest` test runner:

```json
  // settings.json

  "jest.pathToJest": "npm run test --",
  "jest.pathToConfig": "./jest.config.js"
```

## PS stuff

angular builder jest
--esModuleInterop ? sjekk om dette bare gjelder med custom module resolution
running js files in test - hva kommer denne erroren av?

##### Resources

[Angular CLI: “ng test” with Jest in 3 minutes (v2)](https://medium.com/angular-in-depth/angular-cli-ng-test-with-jest-in-3-minutes-v2-1060ddd7908d) - by JeB Barabanov

[How to use Jest in Angular aka make unit testing great (again)](https://itnext.io/how-to-use-jest-in-angular-aka-make-unit-testing-great-again-e4be2d2e92d1) - by Ali Kamalizade

[jest-preset-angular](https://github.com/thymikee/jest-preset-angular)

[angular-builder-jest](https://github.com/just-jeb/angular-builders/tree/master/packages/jest)
