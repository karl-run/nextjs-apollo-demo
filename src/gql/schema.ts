import { gql } from 'graphql-tag'
import { makeExecutableSchema } from '@graphql-tools/schema'

export const resolvers = {
  Query: {
    hello: () => 'world',
  },
}

export const typeDefs = gql`
  type Query {
    hello: String
  }
`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
