# React Native FlatList Performance Issues

This repository demonstrates a common performance issue encountered when using `FlatList` in React Native with large datasets. The problem is slow and choppy scrolling due to the rendering of all items at once.

## Problem

The provided `bug.js` file shows a `FlatList` component populated with a large dataset (`largeDataset`).  As the number of items increases, scrolling becomes increasingly sluggish and unresponsive.

## Solution

The `bugSolution.js` file provides a solution using `windowSize` and `initialNumToRender` properties of `FlatList` to improve performance.  These properties control how many items are rendered initially and in each subsequent window, reducing the initial rendering load and improving scrolling smoothness.

Additional optimizations such as `getItemLayout` and `removeClippedSubviews` may further enhance performance depending on the complexity of the list items.
