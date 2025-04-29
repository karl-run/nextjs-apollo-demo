import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
import { resolvers, typeDefs } from '@/gql/schema'

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

const apolloHandler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
})

const handler = (req: NextRequest) => apolloHandler(req)

export { handler as GET, handler as POST }
