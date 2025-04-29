'use client'

import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { BigNastyDocument } from '@/gql/graphql-operations'

function Page(): ReactElement {
  const { data, loading, error } = useQuery(BigNastyDocument)

  return (
    <div>
      <p>Fetched purely client side</p>
      {loading && <p>Loading...</p>}
      {error && <p>Woop, error: {error.message}</p>}
      {data && (
        <div>
          <p>Data:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Page
