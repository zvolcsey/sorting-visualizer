import { getRandomIntInclusive } from '../utils/utils'
import { mergeSortWithSortSteps } from './mergeSort'

describe('mergeSort', () => {
  it('sorts 100 random arrays of numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      const array = new Array(getRandomIntInclusive(0, 1000))
        .fill(0)
        .map(() => getRandomIntInclusive(-1000, 1000))

      const javaScriptSortedArray = [...array].sort((a, b) => a - b)
      const { sortedArray: mergeSortedArray } = mergeSortWithSortSteps(array)
      expect(mergeSortedArray).toEqual(javaScriptSortedArray)
    }
  }),
    it('sorts all elements equal case correctly', () => {
      const array = [1, 1, 1, 1, 1]
      const { sortedArray: mergeSortedArray } = mergeSortWithSortSteps(array)
      expect(mergeSortedArray.toString()).toEqual(array.toString())
    })
})
