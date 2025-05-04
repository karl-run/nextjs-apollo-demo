import React, { ReactElement, Suspense } from 'react'
import { GetSlowDocument } from '@/gql/graphql-operations'
import { PreloadQuery } from '@/gql/rsc/ApolloClient'
import ClientQuerier from '@/app/prerender/client-querier'

async function Page(): Promise<ReactElement> {
  return (
    <div>
      <h2>This is RSC, but prerendered, no providers</h2>
      <PreloadQuery query={GetSlowDocument}>
        <Suspense fallback={<div>{`Loadings Suspense'd child`}</div>}>
          <ClientQuerier />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}

export default Page
