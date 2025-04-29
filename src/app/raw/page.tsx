import React, { ReactElement } from 'react'
import { GetBasicDocument } from '@/gql/graphql-operations'
import { query } from '@/gql/rsc/ApolloClient'

async function Page(): Promise<ReactElement> {
  const { data } = await query({ query: GetBasicDocument })

  return (
    <div>
      <h2>This is RSC, raw query, no providers</h2>
      <div>
        <p>Data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Page
