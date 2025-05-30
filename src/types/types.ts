export interface ICompareStep {
  type: 'compare'
  indices: [number, number]
}

export interface IOverwriteStep {
  type: 'overwrite'
  index: number
  value: number
}

export type IMergeSortStepUnion = ICompareStep | IOverwriteStep

export interface IMergeSortResult {
  sortedArray: number[]
  sortSteps: IMergeSortStepUnion[]
}

export interface IHighlightStep {
  type: 'highlight'
  indices: [number, number]
}

export interface IResetStep {
  type: 'reset'
  indices: [number, number]
}

export type IMergeSortAnimationStepUnion =
  | IHighlightStep
  | IResetStep
  | IOverwriteStep
