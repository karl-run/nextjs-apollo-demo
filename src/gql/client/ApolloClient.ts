import { HttpLink, ApolloClient, from, NormalizedCacheObject } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'
import { InMemoryCache } from '@apollo/client-integration-nextjs'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`)
    })

  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      errorLink,
      new RetryLink({
        attempts: { max: 5 },
        delay: {
          initial: 250,
          jitter: true,
        },
      }),
      new HttpLink({
        uri: '/api/graphql',
      }),
    ]),
  })
}
