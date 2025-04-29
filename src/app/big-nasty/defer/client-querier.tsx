'use client'

import React, { ReactElement } from 'react'
import { useSuspenseQuery } from '@apollo/client'
import { BigNastyDeferDocument } from '@/gql/graphql-operations'

function ClientQuerier(): ReactElement {
  const { data, error } = useSuspenseQuery(BigNastyDeferDocument)

  return (
    <div>
      <p>This is the client part (with defer)</p>
      {error && <p>Woop, error: {error.message}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default ClientQuerier
