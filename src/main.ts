import { mergeSort } from './algorithms/mergeSort'
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
// Now: Compare the result with the built-in JS sort
// Future: Render the sorting process on the screen
mergeSortButton?.addEventListener('click', () => {
  const mergeSortedArray = mergeSort([...array])
  const builtInSortedArray = array.sort((a, b) => a - b)
  console.log(
    'Merge Sort result is equal to JS built-in sort: ' +
      (mergeSortedArray.toString() === builtInSortedArray.toString())
  )
  console.log('Merge Sort result:', mergeSortedArray)
  console.log('JS built-in sort result:', builtInSortedArray)
})
