// Merge sort implementation based on concepts learned
// from AlgoExpert and Clément Mihailescu's tutorial
// Written from scratch in TypeScript

// TODO: Modify the algorithm to collect swaps and comparisons
// for visualization

/**
 * Merge Sort Algorithm
 *
 * This function sorts an array of numbers
 * using the one auxiliary array version of the merge sort algorithm.
 * It has O(n log n) time complexity and O(n) space complexity.
 *
 * @param array - The array to be sorted
 * @returns The sorted array
 */
export function mergeSort(array: number[]): number[] {
  const arrayLength = array.length
  // Base case: if the array has 0 or 1 elements, it is already sorted.
  if (arrayLength <= 1) return array
  const auxiliaryArray = [...array]
  mergeSortHelper(array, 0, arrayLength - 1, auxiliaryArray)
  return array
}

/**
 * Helper function for merge sort
 *
 * This function recursively divides the array into halves
 * and calls the merge function.
 *
 * @param mainArray - The main array to be sorted
 * @param startIndex - The starting index of the array
 * @param endIndex - The ending index of the array
 * @param auxiliaryArray - The auxiliary array used for merging
 * @returns void
 */
function mergeSortHelper(
  mainArray: number[],
  startIndex: number,
  endIndex: number,
  auxiliaryArray: number[]
) {
  // Base case: it is only one element in the range, it is already sorted
  if (startIndex === endIndex) return
  const middleIndex = Math.floor((startIndex + endIndex) / 2)
  mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray)
  mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray)
  doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray)
}

/**
 * Merge function for merge sort
 *
 * This function merges two sorted halves of the array
 * into a single sorted segment.
 *
 * @param mainArray - The main array to be sorted
 * @param startIndex - The starting index of the array
 * @param middleIndex - The middle index of the array
 * @param endIndex - The ending index of the array
 * @param auxiliaryArray - The auxiliary array used for merging
 */
function doMerge(
  mainArray: number[],
  startIndex: number,
  middleIndex: number,
  endIndex: number,
  auxiliaryArray: number[]
) {
  let k = startIndex
  let i = startIndex
  let j = middleIndex + 1
  // Compare the elements from the left and right halves
  // and merge them into the main array
  while (i <= middleIndex && j <= endIndex) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k] = auxiliaryArray[i]
      i++
    } else {
      mainArray[k] = auxiliaryArray[j]
      j++
    }
    k++
  }
  // Copy any remaining elements from the left or right half
  while (i <= middleIndex) {
    mainArray[k] = auxiliaryArray[i]
    i++
    k++
  }
  while (j <= endIndex) {
    mainArray[k] = auxiliaryArray[j]
    j++
    k++
  }
}
