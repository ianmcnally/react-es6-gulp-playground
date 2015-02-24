# react-es6-gulp-playground

I wanted a place to play around with [React](facebook.github.io/react/) and ES6 (aka the new version of Javascript). Despite the wealth of information on the internet about either of those topics, I couldn't find a consensus on the best way to put them together. Here I've put together a build process that uses [gulp](gulpjs.com) and [browserify](browserify.org) (ES6 module loading "shim")

## Setup
Note: Having `node` installed is a prerequisite.

1. `npm install -g gulp`.
2. `npm install`.

## Dev

1. To compile, run `gulp`.
  - Compiled js is in dist/javascript.
  - The default entry file is src/app.jsx.

## Test

Includes support for [Jest](https://facebook.github.io/jest/docs/tutorial-react.html#content) with ES6.

1. To run tests, run `gulp test`.
  - Looks for files ending in `-test.js` inside `src/`.