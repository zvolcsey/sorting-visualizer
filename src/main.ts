import { mergeSortWithSortSteps } from './algorithms'
import { mergeSortAnimation } from './animations/mergeSortAnimation'
import { renderArray, resetArray } from './utils/utils'

const generateArrayButton: HTMLButtonElement | null =
  document.querySelector('#generate-array')
const mergeSortButton: HTMLButtonElement | null =
  document.querySelector('#merge-sort')

// Create an array to hold the random numbers
let array: number[] = []

// Generate a random array of numbers when the page is loaded
// and render it to the DOM
document.addEventListener('DOMContentLoaded', () => {
  array = resetArray()
  renderArray(array)
})

// Generate a new random array of numbers and render it to the DOM
// when the "Generate Array" button is clicked
generateArrayButton?.addEventListener('click', () => {
  array = resetArray()
  renderArray(array)
})

// Sort the array using merge sort when the "Merge Sort" button is clicked
mergeSortButton?.addEventListener('click', () => {
  // Sort the array using merge sort
  const { sortedArray: mergeSortedArray, sortSteps } = mergeSortWithSortSteps([
    ...array,
  ])
  // Sort the array using the built-in JavaScript sort function
  const builtInSortedArray = array.sort((a, b) => a - b)
  // Compare the results of merge sort and the built-in sort
  console.log(
    'Merge Sort result is equal to JS built-in sort: ' +
      (mergeSortedArray.toString() === builtInSortedArray.toString())
  )
  // Log the sorted arrays to the console
  console.log('Merge Sort result:', mergeSortedArray)
  console.log('JS built-in sort result:', builtInSortedArray)

  // Run the merge sort animation and render the sorted array to the DOM
  mergeSortAnimation(sortSteps, 10)
})
