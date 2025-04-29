import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import {NextRequest} from "next/server";

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;


const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const apolloHandler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

const handler = (req: NextRequest) => apolloHandler(req)

export { handler as GET, handler as POST };