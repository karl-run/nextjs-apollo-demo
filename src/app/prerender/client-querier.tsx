'use client'

import React, { ReactElement } from 'react'
import { useSuspenseQuery } from '@apollo/client'
import { GetSlowDocument } from '@/gql/graphql-operations'

function ClientQuerier(): ReactElement {
  const { data, error } = useSuspenseQuery(GetSlowDocument)

  return (
    <div>
      <p>This is the client part</p>
      {error && <p>Woop, error: {error.message}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default ClientQuerier
