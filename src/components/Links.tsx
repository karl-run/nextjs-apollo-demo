import React, { ReactElement } from 'react'
import Link from 'next/link'

function Links(): ReactElement {
  return (
    <div className="flex gap-3 p-2 ml-4">
      <Link className="underline" href="/dynamic/fast">
        Dynamic (fast)
      </Link>
      <Link className="underline" href="/prerender">
        Prerender
      </Link>
      <Link className="underline" href="/raw">
        Raw
      </Link>
      <Link className="underline" href="/raw">
        Deep (30k) client side
      </Link>
    </div>
  )
}

export default Links
