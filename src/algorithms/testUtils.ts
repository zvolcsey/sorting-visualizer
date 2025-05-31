import type {
  SortStepWithOverwriteUnion,
  SortStepWithSwapUnion,
} from '../types/types'
import { getRandomIntInclusive } from '../utils/utils'

/**
 * Fuzz test for sorting algorithms
 *
 * This function generates random arrays and
 * compares the provided sorting function's output
 * with the JavaScript built-in sorting function's output
 *
 * @param {Function} sortFn - The sorting function to test
 * @param {number} count - The number of the random arrays to test
 * @param {number} maxArrayLength - The maximum length of the array to sort
 * @return {void}
 */
export function fuzzTest(
  sortFn: (array: number[]) => {
    sortedArray: number[]
    sortSteps: (SortStepWithSwapUnion | SortStepWithOverwriteUnion)[]
  },
  count: number = 100,
  maxArrayLength: number = 10
): void {
  for (let i = 0; i < count; i++) {
    const array = new Array(getRandomIntInclusive(0, maxArrayLength))
      .fill(0)
      .map(() => getRandomIntInclusive(-1000, 1000))

    const javaScriptSortedArray = [...array].sort((a, b) => a - b)
    const { sortedArray } = sortFn([...array])

    expect(sortedArray).toEqual(javaScriptSortedArray)
  }
}
