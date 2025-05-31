export interface ICompareStep {
  type: 'compare'
  indices: [number, number]
}

export interface ISwapStep {
  type: 'swap'
  indices: [number, number]
}

export interface IOverwriteStep {
  type: 'overwrite'
  index: number
  value: number
}

export type SortStepWithSwapUnion = ICompareStep | ISwapStep
export type SortStepWithOverwriteUnion = ICompareStep | IOverwriteStep

export interface SortResult<
  T extends SortStepWithSwapUnion | SortStepWithOverwriteUnion,
> {
  sortedArray: number[]
  sortSteps: T[]
}

export interface IHighlightStep {
  type: 'highlight'
  indices: [number, number]
}

export interface IResetStep {
  type: 'reset'
  indices: [number, number]
}

export type SortAnimationStepUnion =
  | IHighlightStep
  | IResetStep
  | ISwapStep
  | IOverwriteStep
