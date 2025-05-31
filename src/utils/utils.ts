/**
 * Generate a random array of numbers
 *
 * @returns {number[]} - An array of random numbers
 */
export function resetArray(): number[] {
  const array: number[] = []
  for (let i = 0; i < 30; i++) {
    array.push(getRandomIntInclusive(5, 500))
  }
  return array
}

/**
 * Render an array of numbers as bars in the DOM
 *
 * @param {number[]} array - An array of numbers to render
 * @returns {void}
 */
export function renderArray(array: number[]): void {
  const container = document.querySelector('.array-container')
  if (!container) return

  container.innerHTML = ''
  array.forEach((value) => {
    const bar = document.createElement('div')
    bar.classList.add('array-bar')
    bar.style.height = `${value}px`
    container.appendChild(bar)
  })
}

/**
 *  Generate a random integer between min and max
 *  The maximum and minimum values are inclusive
 *
 *  From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
 *
 *  @param {number} min - The minimum value
 *  @param {number} max - The maximum value
 *  @returns {number} - A random integer between min and max
 */
export function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

/**
 * Enable the provided buttons
 *
 * @param {HTMLButtonElement[] | null} buttons - An array of buttons to enable
 * @returns {void}
 */
export function enableButtons(buttons: (HTMLButtonElement | null)[]): void {
  buttons.forEach((button) => {
    if (button) {
      button.disabled = false
    }
  })
}

/**
 * Disable the provided buttons
 *
 * @param {HTMLButtonElement[] | null} buttons - An array of buttons to disable
 * @returns {void}
 */
export function disableButtons(buttons: (HTMLButtonElement | null)[]): void {
  buttons.forEach((button) => {
    if (button) {
      button.disabled = true
    }
  })
}

/**
 * Run the sorting algorithm flow
 *
 * Handle the execution of the provided sorting algorithm.
 * It disables the buttons before the sort starts,
 * and re-enables them after the sort animation is complete.
 * It also compares the result of the sorting algorithms
 * (provided and built-in sort method)
 * It runs the animation function to visualize the sort steps.
 *
 * @param {(HTMLButtonElement | null)[]} buttons
 * - An array of buttons to disable/enable during the sort
 * @param {string} algorithmName - The name of the sorting algorithm
 * @param {Function} sortFn - The sorting function to execute
 * @param {number[]} array - The array to sort
 * @param {Function} animationFn - The animation function to visualize the sort
 * @param {number} delay - The delay between animation frames
 * @returns {number[]} - The sorted array
 */
export async function runSortFlow(
  buttons: (HTMLButtonElement | null)[],
  algorithmName: string,
  sortFn: (array: number[]) => { sortedArray: number[]; sortSteps: any[] },
  array: number[],
  animationFn: (sortSteps: any[], delay: number) => Promise<void>,
  delay: number = 10
): Promise<number[]> {
  // Disable the buttons to prevent further clicks during the sort
  disableButtons(buttons)
  // Sort the array using the provided sorting algorithm
  const { sortedArray: sortedArrayByCustom, sortSteps } = sortFn([...array])
  // Sort the array using the built-in JavaScript sort function
  const sortedArrayByBuiltIn = [...array].sort((a, b) => a - b)
  // Compare the results of the provided sorting algorithm and the built-in sort
  // TODO: Add utility function (logSortResults and arrayEquals)
  console.group(`${algorithmName} Execution`)
  console.log('Input Array:', array)
  console.log(`${algorithmName} result:`, sortedArrayByCustom)
  console.log('JS built-in sort result:', sortedArrayByBuiltIn)
  console.log(
    'Are the results equal?',
    JSON.stringify(sortedArrayByCustom) === JSON.stringify(sortedArrayByBuiltIn)
  )
  console.groupEnd()
  // Run the sorting animation and enable the buttons again
  // only after the animation is complete
  await animationFn(sortSteps, delay)
    .catch((error) => {
      console.error('Animation Error:', error)
    })
    .finally(() => enableButtons(buttons))
  return sortedArrayByCustom
}
