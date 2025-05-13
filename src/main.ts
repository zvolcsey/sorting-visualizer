import { renderArray, resetArray } from './utils/utils'

// Select the generate array button from the DOM
const generateArrayButton: HTMLButtonElement | null =
  document.querySelector('#generate-array')

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
