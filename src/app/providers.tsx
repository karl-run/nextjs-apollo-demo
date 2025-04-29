'use client'

import { PropsWithChildren } from 'react'
import { makeApolloClient } from '@/gql/client/ApolloClient'
import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs'

export function Providers({ children }: PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeApolloClient}>{children}</ApolloNextAppProvider>
}
