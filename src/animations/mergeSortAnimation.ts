/*
  Animation system based on concepts learned
  from AlgoExpert and Clément Mihailescu's tutorial.
  Written from scratch in TypeScript.
  Core idea: record highlight, reset and overwrite steps 
  and play them back visually.
*/

import type {
  IMergeSortAnimationStepUnion,
  IMergeSortStepUnion,
  IOverwriteStep,
  IHighlightStep,
  IResetStep,
} from '../types/types'

/**
 * Merge Sort Animation
 *
 * Show the merge sort animation steps on the screen.
 *
 * @param sortSteps - It stores compare and overwrite steps.
 * They are represented the merge sort workflow.
 * @param delay - The time delay between each animation step.
 */
export function mergeSortAnimation(
  sortSteps: IMergeSortStepUnion[],
  delay: number
) {
  // Create an array to hold the animation steps
  // It stores highlight, reset and overwrite steps
  // The compare steps are represented
  // as highlight and reset steps in the animation
  const animationSteps: IMergeSortAnimationStepUnion[] = []
  for (const step of sortSteps) {
    if (step.type === 'compare') {
      animationSteps.push({
        type: 'highlight',
        indices: [step.indices[0], step.indices[1]],
      })
      animationSteps.push({
        type: 'reset',
        indices: [step.indices[0], step.indices[1]],
      })
    } else {
      animationSteps.push({
        type: 'overwrite',
        index: step.index,
        value: step.value,
      })
    }
  }
  // Iterate through the animation steps and apply the styles to the array bars
  // This for loop simply creates timeouts for each step
  // After the specified delay, the style changes will be added
  // to the callstack from the task queue, resulting in a smooth animation
  for (let i = 0; i < animationSteps.length; i++) {
    const arrayBars: NodeListOf<HTMLElement> =
      document.querySelectorAll('.array-bar')
    // Handle highlight and reset steps
    if (
      animationSteps[i].type === 'highlight' ||
      animationSteps[i].type === 'reset'
    ) {
      const { indices } = animationSteps[i] as IHighlightStep | IResetStep
      const [index1, index2] = indices
      const barOneStyle = arrayBars[index1].style
      const barTwoStyle = arrayBars[index2].style
      const color = animationSteps[i].type === 'highlight' ? 'red' : '#006eff'
      setTimeout(() => {
        barOneStyle.backgroundColor = color
        barTwoStyle.backgroundColor = color
      }, i * delay)
      // Handle overwrite steps
    } else {
      setTimeout(() => {
        const { index, value } = animationSteps[i] as IOverwriteStep
        const barOneStyle = arrayBars[index].style
        barOneStyle.height = `${value}px`
      }, i * delay)
    }
  }
}
