'use client'

import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { GetVeryDeepNestedDocument } from '@/gql/graphql-operations'

function Page(): ReactElement {
  const { data, loading, error } = useQuery(GetVeryDeepNestedDocument)

  return (
    <div>
      <h1>Deep</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.deepNesteds?.slice(0, 10)?.map((deep) => (
        <div key={deep.id}>
          <h2>{deep.name}</h2>
          <p>{deep.description}</p>
          <div>
            <h3>{deep.someChild?.name}</h3>
            <p>{deep.someChild?.description}</p>
            <div>
              <h4>{deep.someChild?.evenDeeper?.name}</h4>
              <p>{deep.someChild?.evenDeeper?.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
