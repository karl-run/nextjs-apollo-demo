import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type BigNasty = {
  __typename?: 'BigNasty'
  crazySlow?: Maybe<SpeedEntry>
  fast: SpeedEntry
  slow?: Maybe<SpeedEntry>
}

export type Query = {
  __typename?: 'Query'
  basicRootQuery: Scalars['String']['output']
  bigNasty?: Maybe<BigNasty>
  reallySlowOne: Scalars['String']['output']
}

export type SpeedEntry = {
  __typename?: 'SpeedEntry'
  value: Scalars['String']['output']
  when: Scalars['Float']['output']
}

export type GetBasicQueryVariables = Exact<{ [key: string]: never }>

export type GetBasicQuery = { __typename?: 'Query'; basicRootQuery: string }

export type GetSlowQueryVariables = Exact<{ [key: string]: never }>

export type GetSlowQuery = { __typename?: 'Query'; reallySlowOne: string }

export type GetBasicAndSlowQueryVariables = Exact<{ [key: string]: never }>

export type GetBasicAndSlowQuery = { __typename?: 'Query'; basicRootQuery: string; reallySlowOne: string }

export type SpeedFragment = { __typename?: 'SpeedEntry'; when: number; value: string }

export type BigNastyQueryVariables = Exact<{ [key: string]: never }>

export type BigNastyQuery = {
  __typename?: 'Query'
  bigNasty?: {
    __typename?: 'BigNasty'
    fast: { __typename?: 'SpeedEntry'; when: number; value: string }
    slow?: { __typename?: 'SpeedEntry'; when: number; value: string } | null
    crazySlow?: { __typename?: 'SpeedEntry'; when: number; value: string } | null
  } | null
}

export type BigNastyDeferQueryVariables = Exact<{ [key: string]: never }>

export type BigNastyDeferQuery = {
  __typename?: 'Query'
  bigNasty?:
    | ({ __typename?: 'BigNasty'; fast: { __typename?: 'SpeedEntry'; when: number; value: string } } & (
        | { __typename?: 'BigNasty'; slow?: { __typename?: 'SpeedEntry'; when: number; value: string } | null }
        | { __typename?: 'BigNasty'; slow?: never }
      ) &
        (
          | { __typename?: 'BigNasty'; crazySlow?: { __typename?: 'SpeedEntry'; when: number; value: string } | null }
          | { __typename?: 'BigNasty'; crazySlow?: never }
        ))
    | null
}

export const SpeedFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Speed' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SpeedEntry' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'when' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SpeedFragment, unknown>
export const GetBasicDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBasic' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'basicRootQuery' } }],
      },
    },
  ],
} as unknown as DocumentNode<GetBasicQuery, GetBasicQueryVariables>
export const GetSlowDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSlow' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reallySlowOne' } }],
      },
    },
  ],
} as unknown as DocumentNode<GetSlowQuery, GetSlowQueryVariables>
export const GetBasicAndSlowDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBasicAndSlow' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'basicRootQuery' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reallySlowOne' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBasicAndSlowQuery, GetBasicAndSlowQueryVariables>
export const BigNastyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BigNasty' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bigNasty' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Speed' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slow' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Speed' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'crazySlow' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Speed' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Speed' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SpeedEntry' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'when' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BigNastyQuery, BigNastyQueryVariables>
export const BigNastyDeferDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BigNastyDefer' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bigNasty' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Speed' } }],
                  },
                },
                {
                  kind: 'InlineFragment',
                  directives: [{ kind: 'Directive', name: { kind: 'Name', value: 'defer' } }],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slow' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Speed' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  directives: [{ kind: 'Directive', name: { kind: 'Name', value: 'defer' } }],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'crazySlow' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Speed' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Speed' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SpeedEntry' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'when' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BigNastyDeferQuery, BigNastyDeferQueryVariables>
