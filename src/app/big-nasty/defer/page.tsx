import React, { ReactElement, Suspense } from 'react'
import { BigNastyDeferDocument } from '@/gql/graphql-operations'
import { PreloadQuery } from '@/gql/rsc/ApolloClient'

import ClientQuerier from './client-querier'

function Page(): ReactElement {
  return (
    <div>
      <p>Fetched in RSC, with defer, with suspense</p>
      <PreloadQuery query={BigNastyDeferDocument}>
        <Suspense fallback={<div>{`Loadings Suspense'd child`}</div>}>
          <ClientQuerier />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}

export default Page
