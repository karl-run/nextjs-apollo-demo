import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
import { schema } from '@/gql/server/schema'

const server = new ApolloServer({ schema })

const apolloHandler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
})

const handler = (req: NextRequest) => apolloHandler(req)

export { handler as GET, handler as POST }
