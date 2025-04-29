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
      <Link className="underline" href="/big-nasty/slow">
        Big Nasty (client only)
      </Link>
      <Link className="underline" href="/big-nasty/slow-rsc">
        Big Nasty (rsc)
      </Link>
      <Link className="underline" href="/big-nasty/defer">
        Big Nasty (rsc defer)
      </Link>
    </div>
  )
}

export default Links
