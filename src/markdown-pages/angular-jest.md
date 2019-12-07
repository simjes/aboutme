---
path: "/blog/angular-jest"
date: "03-12-2019"
title: "Replace Karma with Jest - Angular"
tags:
  - "angular"
  - "jest"
---

## The Problem

I recently entered a new project with an Angular tech stack, and I was bummed that it didn't use `Jest`. I thought it would be fine, but running the tests in `Karma` is so unbearably slow and it was hard to debug, so I had to do something about it.

There is always a cost to changing up things, but the transition to `Jest` is pretty simple, as we will see.

## My Requirements

I had some requirements that I wanted to achieve if we were going to convert to `Jest`. The tests need to run faster, thats a given, but I also want a better and faster debugging experience. `vscode-jest` will give us that. When the project is converted, it is also possible to use `@testing-libray/angular`, which encourages better testing practices, and we will be able to do snapshot testing.

## Overview

> This guide is based on a fresh generated Angular 8 app, check [placeholder](#vscode-jest-setup) for some extra configuration tips

1. [Remove Karma](#remove-karma)
1. [Add jest-preset-angular](#add-and-configure-jest-preset-angular)
1. [Run test converter](#run-test-converter)
1. [Add scripts](#add-scripts)
1. [vscode-jest setup](#vscode-jest-setup)

## 1. Remove Karma <a name="remove-karma"></a>

Removing Karma is pretty simple, just remove dependencies and delete the setup files.
You will also have to remove `test.ts` from `files` in `tsconfig.spec.json`.

```bash
npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
rm karma.conf.js ./src/test.ts
```

We will no longer be running `ng test` in the project, so we should remove the configuration for that as well. Remove the `test` section in `angular.json`.

## 2. Add and Configure jest-preset-angular <a name="add-and-configure-jest-preset-angular"></a>

To get going we have to install some dependencies

```bash
npm install -D jest jest-preset-angular @types/jest
```

Now there is some setup required.
The first file we will create is for setting up `Jest` to work with TypeScript.
Create `setupJest.ts` in the root directory of your project.

```typescript
// setupJest.ts

import "jest-preset-angular";
import "./jestGlobalMocks"; // browser mocks globally available for every test
```

Now what is `jestGlobalMocks` you might ask. This is a setup file for mocks that will be available for every test.
A difference between `Karma` and `Jest` is that the latter will run in `jsdom` which is emulates a browser, while the former will actually run in the browser. This means that with `Jest` not every browser API will be available, so we will mock it. Create `jestGlobalMocks.ts` in your root folder. The following configuration is from `jest-preset-angular` examples.

```typescript
// jestGlobalMocks.ts

Object.defineProperty(window, "CSS", { value: null });
Object.defineProperty(document, "doctype", {
  value: "<!DOCTYPE html>"
});
Object.defineProperty(window, "getComputedStyle", {
  value: () => {
    return {
      display: "none",
      appearance: ["-webkit-appearance"]
    };
  }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, "transform", {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
```

Last but no least, we have to configure `Jest` itself. Create a `jest.config.js` file in your root folder.

```javascript
// jest.config.js

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"]
};
```

Ok, so here is what's going on:

- `preset`: The base of your configuration.
- `setupFilesAfterEnv`: A list of paths to modules that run some code to configure or set up the testing framework before each test.

There is of course a lot of other things you can configure, more on that in the offical [Jest documentation](https://jestjs.io/docs/en/configuration).

### Configure Typings

We also have to setup the correct types in our TypeScript configurations. Add `jest` in `compilerOptions.types` array in both `./tsconfig.json`(Used by our IDE) and `./src/tsconfig.spec.json`(Used by `Jest`).

```json
// tsconfig.json and tsconfig.spec.json

{
  //...
  "compilerOptions": {
    //...
    "types": [
      //...
      "jest"
    ]
  }
}
```

## 3. Run Test Converter <a name="run-test-converter"></a>

So we are ready to go, but our tests are still using the `jasmine` API. Luckly `jest-codemods` will help us automatically convert most of our tests. The following will step us through some convertion options:

```bash
npx jest-codemods
```

After `jest-codemods` is done, you can run `npx jest` in your project to see if the tests run as expected.
There are some gotchas that you should know about when switching to `Jest`, check out [Ali Kamalizade's](https://itnext.io/how-to-use-jest-in-angular-aka-make-unit-testing-great-again-e4be2d2e92d1) post for more on that.

## 4. Add Scripts <a name="add-scripts"></a>

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

## 5. vscode-jest Setup <a name="vscode-jest-setup"></a>

Now that our tests are running, we should make use of the excelent vscode plugin for showing test status as we code. Install `vscode-jest` and add the following to your `settings.json`, afterwards you have to restart the `vscode-jest` test runner:

```json
  // settings.json

  "jest.pathToJest": "npm run test --",
  "jest.pathToConfig": "./jest.config.js"
```

## Q&A

### Why don't you just use `@angular-builder/jest`?

I couldn't get it working with `vscode-jest`, and one of my requirements was that I could get fast feedback in my IDE on the tests.

### My file structure is not the same as yours, how do I configure it?

So most of the guide should be valid with replacing the file location for the described files. The one thing I saw from a project that was migrated to Angular 8, was that `tsconfig.spec.json` was located in the `src` folder. This requires overwriting `jest-preset-angular's` location of the file in `jest.config.js`

```javascript
// jest.config.js

module.exports = {
  // ...
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/src/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        "jest-preset-angular/build/InlineFilesTransformer",
        "jest-preset-angular/build/StripStylesTransformer"
      ]
    }
  }
};
```

> `globals` is a set of global variables that need to be available in all test environments The default configuration can be seen [here](https://github.com/thymikee/jest-preset-angular/blob/master/jest-preset.js)

### I have custom paths for module resolution in `tsconfig.json` and running `jest` gives me errors

No problem, just configure the `moduleNameMapper` in `jest.config.js`

```javascript
// jest.config.js
const { pathsToModuleNameMapper } = require("ts-jest/utils");
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig");

module.exports = {
  // ...
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/"
  })
};
```

# TODO

- nye prosjekter har noen av filene i root istedet for src - ta utangspunkt i nytt generert prosjekt, med disvlaimer om at i gamle prosjekt kan filene ligge i src
- fikk warning på esModuleInterop i nytt prosjekt

* egen blog post for å gå til cypress istedet for protractor?

TODO: special cases
if you have custom module resolution in tsconfig
jest.config.js
const { pathsToModuleNameMapper } = require("ts-jest/utils");
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig");
moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
prefix: '<rootDir>/',
}),

- `moduleNameMapper`: This is only require if you have defined [alias paths](https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353) for module resolution in your `tsconfig.json` file.

TODO: running js files in test - hva kommer denne erroren av?

##### Resources

[Angular CLI: “ng test” with Jest in 3 minutes (v2)](https://medium.com/angular-in-depth/angular-cli-ng-test-with-jest-in-3-minutes-v2-1060ddd7908d) - by JeB Barabanov

[How to use Jest in Angular aka make unit testing great (again)](https://itnext.io/how-to-use-jest-in-angular-aka-make-unit-testing-great-again-e4be2d2e92d1) - by Ali Kamalizade

[jest-preset-angular](https://github.com/thymikee/jest-preset-angular)

[angular-builder-jest](https://github.com/just-jeb/angular-builders/tree/master/packages/jest)

[Testing Angular Faster with Jest](https://www.xfive.co/blog/testing-angular-faster-jest/)
