import { bubbleSortWithSortSteps, mergeSortWithSortSteps } from './algorithms'
import { sortAnimation } from './animations/sortAnimation'
import { renderArray, resetArray, runSortFlow } from './utils/utils'

const generateArrayButton: HTMLButtonElement | null =
  document.querySelector('#generate-array')
const bubbleSortButton: HTMLButtonElement | null =
  document.querySelector('#bubble-sort')
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

// Sort the array using bubble sort when the "Bubble Sort" button is clicked
bubbleSortButton?.addEventListener('click', async () => {
  array = await runSortFlow(
    [generateArrayButton, bubbleSortButton, mergeSortButton],
    'Bubble Sort',
    bubbleSortWithSortSteps,
    array,
    sortAnimation,
    10
  )
})

// Sort the array using merge sort when the "Merge Sort" button is clicked
mergeSortButton?.addEventListener('click', async () => {
  array = await runSortFlow(
    [generateArrayButton, bubbleSortButton, mergeSortButton],
    'Merge Sort',
    mergeSortWithSortSteps,
    array,
    sortAnimation,
    10
  )
})
