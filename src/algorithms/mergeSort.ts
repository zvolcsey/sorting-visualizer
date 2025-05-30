/*
  Merge sort implementation based on concepts learned
  from AlgoExpert and Clément Mihailescu's tutorial
  Written from scratch in TypeScript.
  Core idea: write the one auxiliary array version of the merge sort algorithm 
  and record compare and overwrite steps for visualization
*/

import type { IMergeSortStepUnion, IMergeSortResult } from '../types/types'

/**
 * Merge Sort Algorithm
 *
 * This function sorts an array of numbers
 * using the one auxiliary array version of the merge sort algorithm.
 * It has O(n log n) time complexity and O(n) space complexity.
 *
 * @param array - The array to be sorted
 * @returns An object containing the sorted array and an array of sort steps
 * @returns { sortedArray: number[], sortSteps: ISortSteps[] }
 */
export function mergeSortWithSortSteps(array: number[]): IMergeSortResult {
  const sortSteps: IMergeSortStepUnion[] = []
  const arrayLength = array.length
  // Base case: if the array has 0 or 1 elements, it is already sorted.
  if (arrayLength <= 1) return { sortedArray: array, sortSteps }
  const auxiliaryArray = [...array]
  mergeSortHelper(array, 0, arrayLength - 1, auxiliaryArray, sortSteps)
  return { sortedArray: array, sortSteps }
}

/**
 * Helper function for merge sort
 *
 * This function recursively divides the array into halves
 * and calls the merge function.
 *
 * @param mainArray - The main array to be sorted
 * @param startIndex - The starting index of the array segment
 * @param endIndex - The ending index of the array segment
 * @param auxiliaryArray - The auxiliary array used for merging
 * @param sortSteps - It stores compare and overwrite steps.
 * They are represented the merge sort workflow.
 * @returns void
 */
function mergeSortHelper(
  mainArray: number[],
  startIndex: number,
  endIndex: number,
  auxiliaryArray: number[],
  sortSteps: IMergeSortStepUnion[]
) {
  // Base case: it is only one element in the range, it is already sorted
  if (startIndex === endIndex) return
  const middleIndex = Math.floor((startIndex + endIndex) / 2)
  mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, sortSteps)
  mergeSortHelper(
    auxiliaryArray,
    middleIndex + 1,
    endIndex,
    mainArray,
    sortSteps
  )
  doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    sortSteps
  )
}

/**
 * Merge function for merge sort
 *
 * This function merges two sorted halves of the array segment
 * into a single sorted segment.
 *
 * @param mainArray - The main array to be sorted
 * @param startIndex - The starting index of the array segment
 * @param middleIndex - The middle index of the array segment
 * @param endIndex - The ending index of the array segment
 * @param auxiliaryArray - The auxiliary array used for merging
 * @param sortSteps - It stores compare and overwrite steps.
 * They are represented the merge sort workflow.
 */
function doMerge(
  mainArray: number[],
  startIndex: number,
  middleIndex: number,
  endIndex: number,
  auxiliaryArray: number[],
  sortSteps: IMergeSortStepUnion[]
) {
  let k = startIndex
  let i = startIndex
  let j = middleIndex + 1
  // Compare the elements from the left and right halves
  // and merge them into the main array
  while (i <= middleIndex && j <= endIndex) {
    sortSteps.push({ type: 'compare', indices: [i, j] })
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      sortSteps.push({ type: 'overwrite', index: k, value: auxiliaryArray[i] })
      mainArray[k] = auxiliaryArray[i]
      i++
    } else {
      sortSteps.push({ type: 'overwrite', index: k, value: auxiliaryArray[j] })
      mainArray[k] = auxiliaryArray[j]
      j++
    }
    k++
  }
  // Copy any remaining elements from the left or right half
  while (i <= middleIndex) {
    sortSteps.push({ type: 'compare', indices: [i, i] })
    sortSteps.push({ type: 'overwrite', index: k, value: auxiliaryArray[i] })
    mainArray[k] = auxiliaryArray[i]
    i++
    k++
  }
  while (j <= endIndex) {
    sortSteps.push({ type: 'compare', indices: [j, j] })
    sortSteps.push({ type: 'overwrite', index: k, value: auxiliaryArray[j] })
    mainArray[k] = auxiliaryArray[j]
    j++
    k++
  }
}
