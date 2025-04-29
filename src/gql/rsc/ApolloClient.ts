import { registerApolloClient, ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs'
import { SchemaLink } from '@apollo/client/link/schema'
import { schema } from '@/gql/server/schema'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({
      schema,
      context: () => ({}),
    }),
  })
})
