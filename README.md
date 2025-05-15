# Sorting Visualizer Portfolio Project

## Overview

> ### A visualizer for sorting algorithms with TypeScript and Vite.

## Table of Content

1. [Features](#features)
2. [Inspiration](#inspiration)
3. [Code Style](#code-style)
4. [Run locally](#run-locally)
5. [License](#license)

## Features

- Generates and displays a random array with bars on the screen
- Merge sort implementation written in TypeScript
- Sorting results are validate using JavaScript sort method
- Add fuzz testing with Vitest

## Inspiration

This project was inspired by Clément Mihailescu's Sorting Visualizer.

His videos helped spark the idea and provided a great reference:

- [Sorting Visualizer Tutorial](https://www.youtube.com/watch?v=pFXYym4Wbkc)
- [The Projects That Got Me Into Google](https://www.youtube.com/watch?v=n4t_-NjY_Sg)

The core merge sort algorithm is based on lessons from AlgoExpert
(instructed by Clément Mihailescu), implemented from scratch in TypeScript, and compared with the merge sort in the Sorting Visualizer Tutorial.

I previously learned merge sort logic in CS50x.

Some basic utility functions (like random number generation) follow common implementation found in public documentation (e.g. MDN).

## Code Style

This project prioritizes readability. Some syntax (e.g., post-increment `k++`) is written in a more explicit form. It is a portfolio project with demonstration purpose.

```js
// Post-increment syntax
arrayOne[k++] = arrayTwo[i++]

// More readable syntax
arrayOne[k] = arrayTwo[i]
i++
k++
```

## Run locally

Make sure you have **Node.js v20 or higher** (e.g. v22.15.0).

```bash
  git clone git@github.com:zvolcsey/sorting-visualizer.git
  cd sorting-visualizer

  npm ci
  npm run dev
```

## License

MIT
