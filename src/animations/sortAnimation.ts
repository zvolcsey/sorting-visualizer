/*
  Animation system based on concepts learned
  from AlgoExpert and Clément Mihailescu's tutorial.
  Written from scratch in TypeScript.
  Core idea: record highlight, reset and overwrite steps 
  and play them back visually.
  This version has been customized to use a different step structure.
*/

import type {
  SortAnimationStepUnion,
  SortStepWithOverwriteUnion,
  ISwapStep,
  IOverwriteStep,
  IHighlightStep,
  IResetStep,
  SortStepWithSwapUnion,
} from '../types/types'

/**
 * Sort Animation
 *
 * Show the sort animation steps on the screen.
 *
 * @param sortSteps - It stores compare and overwrite steps.
 * They are represented the sort workflow.
 * @param delay - The time delay between each animation step.
 */
export function sortAnimation(
  sortSteps: (SortStepWithSwapUnion | SortStepWithOverwriteUnion)[],
  delay: number
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Create an array to hold the animation steps
      // It stores highlight, reset and overwrite steps
      // The compare steps are represented
      // as highlight and reset steps in the animation
      const animationSteps: SortAnimationStepUnion[] = []
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
        } else if (step.type === 'swap') {
          animationSteps.push({
            type: 'swap',
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
      // Get all the array bars from the DOM
      const arrayBars: NodeListOf<HTMLElement> =
        document.querySelectorAll('.array-bar')
      if (arrayBars.length === 0) {
        console.warn('No array bars found in the DOM.')
        resolve() // Resolve immediately if no bars are found
        return
      }
      // Iterate through the animation steps and apply the styles to the array bars
      // This for loop simply creates timeouts for each step
      // After the specified delay, the style changes will be added
      // to the callstack from the task queue, resulting in a smooth animation
      for (let i = 0; i < animationSteps.length; i++) {
        // TODO: isValidStep function
        // Handle highlight and reset steps
        if (
          animationSteps[i].type === 'highlight' ||
          animationSteps[i].type === 'reset'
        ) {
          setTimeout(() => {
            try {
              const { indices } = animationSteps[i] as
                | IHighlightStep
                | IResetStep
              const [index1, index2] = indices
              const barOneStyle = arrayBars[index1].style
              const barTwoStyle = arrayBars[index2].style
              const color =
                animationSteps[i].type === 'highlight' ? 'red' : '#006eff'
              barOneStyle.backgroundColor = color
              barTwoStyle.backgroundColor = color
            } catch (error) {
              console.error('Error in highlight/reset animation step:', error)
            }
          }, i * delay)
          // Handle overwrite steps
        } else if (animationSteps[i].type === 'swap') {
          setTimeout(() => {
            try {
              const { indices } = animationSteps[i] as ISwapStep
              const [index1, index2] = indices
              const barOneStyle = arrayBars[index1].style
              const barTwoStyle = arrayBars[index2].style
              // Swap the heights of the two bars
              const tempHeight = barOneStyle.height
              barOneStyle.height = barTwoStyle.height
              barTwoStyle.height = tempHeight
            } catch (error) {
              console.error('Error in swap animation step:', error)
            }
          }, i * delay)
          // Handle overwrite steps
        } else {
          setTimeout(() => {
            try {
              const { index, value } = animationSteps[i] as IOverwriteStep
              const barOneStyle = arrayBars[index].style
              barOneStyle.height = `${value}px`
            } catch (error) {
              console.error('Error in overwrite animation step:', error)
            }
          }, i * delay)
        }
      }
      setTimeout(() => {
        // Resolve the promise after all animation steps are completed
        resolve()
      }, animationSteps.length * delay)
    } catch (error) {
      reject(error)
    }
  })
}
