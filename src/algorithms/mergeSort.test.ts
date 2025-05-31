import { mergeSortWithSortSteps } from './mergeSort'
import { fuzzTest } from './testUtils'

describe('mergeSort', () => {
  it('sorts 100 random arrays of numbers correctly', () => {
    fuzzTest(mergeSortWithSortSteps, 100, 1000)
  })
  it('sorts all elements equal case correctly', () => {
    const array = [1, 1, 1, 1, 1]
    const { sortedArray: mergeSortedArray } = mergeSortWithSortSteps(array)
    expect(mergeSortedArray.toString()).toEqual(array.toString())
  })
  it('sorts already sorted array correctly', () => {
    const array = [1, 2, 3, 4, 5]
    const { sortedArray: mergeSortedArray } = mergeSortWithSortSteps(array)
    expect(mergeSortedArray.toString()).toEqual(array.toString())
  })
  it('sorts reversed sorted array correctly', () => {
    const array = [5, 4, 3, 2, 1]
    const { sortedArray: mergeSortedArray } = mergeSortWithSortSteps(array)
    expect(mergeSortedArray.toString()).toEqual([1, 2, 3, 4, 5].toString())
  })
})
