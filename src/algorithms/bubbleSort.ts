/*
  Bubble sort implementation based on concepts learned from AlgoExpert.
  Written from scratch in TypeScript.
  Core idea: repeatedly swap adjacent elements if they are in the wrong order
  and record swap steps for visualization
  This version has been customized to use a different step structure.
*/

import type { SortResult, SortStepWithSwapUnion } from '../types/types'

/**
 * Bubble Sort Algorithm with Sort Steps
 *
 * This function sorts an array of numbers using the bubble sort algorithm.
 * It has O(n^2) time complexity and O(n^2) space complexity.
 * Space complexity is O(1) if we ignore the space used for the sort steps.
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @returns An object containing the sorted array and an array of sort steps
 * @returns { sortedArray: number[], sortSteps: SortStepWithSwapUnion[] }
 */
export function bubbleSortWithSortSteps(
  array: number[]
): SortResult<SortStepWithSwapUnion> {
  const sortSteps: SortStepWithSwapUnion[] = []
  const arrayLength = array.length

  // Base case: if the array has 0 or 1 elements, it is already sorted.
  if (arrayLength <= 1) return { sortedArray: array, sortSteps }

  let isSorted = false
  let counter = 0
  do {
    isSorted = true
    const end = arrayLength - 1 - counter
    for (let i = 0; i < end; i++) {
      // Record the comparison step
      sortSteps.push({ type: 'compare', indices: [i, i + 1] })
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        isSorted = false
        // Record the swap step
        sortSteps.push({ type: 'swap', indices: [i, i + 1] })
      }
    }
    counter++
  } while (!isSorted)
  return { sortedArray: array, sortSteps }
}

/**
 * Swap Function
 *
 * Swap two elements in an array
 *
 * @param {number[]} array - The array in which to swap elements
 * @param {number} i - The index of the first element to swap
 * @param {number} j - The index of the second element to swap
 * @returns {void}
 */
function swap(array: number[], i: number, j: number): void {
  ;[array[i], array[j]] = [array[j], array[i]]
}
