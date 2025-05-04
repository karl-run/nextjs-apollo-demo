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

export type Deep = {
  __typename?: 'Deep'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  someChild?: Maybe<SomeChild>
}

export type EvenDeeper = {
  __typename?: 'EvenDeeper'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  basicRootQuery: Scalars['String']['output']
  deepNested?: Maybe<Deep>
  deepNesteds?: Maybe<Array<Deep>>
  reallySlowOne: Scalars['String']['output']
}

export type QueryDeepNestedArgs = {
  id: Scalars['ID']['input']
}

export type SomeChild = {
  __typename?: 'SomeChild'
  description?: Maybe<Scalars['String']['output']>
  evenDeeper?: Maybe<EvenDeeper>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type GetBasicQueryVariables = Exact<{ [key: string]: never }>

export type GetBasicQuery = { __typename?: 'Query'; basicRootQuery: string }

export type GetSlowQueryVariables = Exact<{ [key: string]: never }>

export type GetSlowQuery = { __typename?: 'Query'; reallySlowOne: string }

export type GetBasicAndSlowQueryVariables = Exact<{ [key: string]: never }>

export type GetBasicAndSlowQuery = { __typename?: 'Query'; basicRootQuery: string; reallySlowOne: string }

export type GetVeryDeepNestedQueryVariables = Exact<{ [key: string]: never }>

export type GetVeryDeepNestedQuery = {
  __typename?: 'Query'
  deepNesteds?: Array<{
    __typename?: 'Deep'
    id: string
    description?: string | null
    name: string
    someChild?: {
      __typename?: 'SomeChild'
      id: string
      description?: string | null
      name: string
      evenDeeper?: { __typename?: 'EvenDeeper'; id: string; description?: string | null; name: string } | null
    } | null
  }> | null
}

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
export const GetVeryDeepNestedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVeryDeepNested' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deepNesteds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'someChild' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'evenDeeper' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
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
  ],
} as unknown as DocumentNode<GetVeryDeepNestedQuery, GetVeryDeepNestedQueryVariables>
