import { bubbleSortWithSortSteps } from './bubbleSort'
import { fuzzTest } from './testUtils'

describe('bubbleSort', () => {
  it('sorts 100 random arrays of numbers correctly', () => {
    fuzzTest(bubbleSortWithSortSteps, 100, 10)
  })
  it('sorts all elements equal case correctly', () => {
    const array = [1, 1, 1, 1, 1]
    const { sortedArray: bubbleSortedArray } = bubbleSortWithSortSteps(array)
    expect(bubbleSortedArray.toString()).toEqual(array.toString())
  })
  it('sorts already sorted array correctly', () => {
    const array = [1, 2, 3, 4, 5]
    const { sortedArray: bubbleSortedArray } = bubbleSortWithSortSteps(array)
    expect(bubbleSortedArray.toString()).toEqual(array.toString())
  })
  it('sorts reversed sorted array correctly', () => {
    const array = [5, 4, 3, 2, 1]
    const { sortedArray: bubbleSortedArray } = bubbleSortWithSortSteps(array)
    expect(bubbleSortedArray.toString()).toEqual([1, 2, 3, 4, 5].toString())
  })
})
