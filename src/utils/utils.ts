/**
 * Generate a random array of numbers
 *
 * @returns {number[]} - An array of random numbers
 */
export function resetArray(): number[] {
  const array: number[] = []
  for (let i = 0; i < 100; i++) {
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
function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}
