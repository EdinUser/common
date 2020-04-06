import { IMatch, IResult } from '../cucumber-generic/JSONSchema'

export interface IFeature {
  location: string
  keyword: string
  name: string
  description: string
  status: string
  elements: ReadonlyArray<IElement>
}

export interface IElement {
  location: string
  type: 'scenario' | 'background'
  keyword: string
  name: string
  description?: string
  status: string
  steps: ReadonlyArray<IStep>
}

export interface IStep {
  step_type: string
  keyword: string
  name: string
  location: string
  result: IResult
  match?: IMatch
  text?: string
  table?: ITable
}

export interface ITable {
  headings: cells
  rows: ReadonlyArray<cells>
}

export type cells = ReadonlyArray<string>
