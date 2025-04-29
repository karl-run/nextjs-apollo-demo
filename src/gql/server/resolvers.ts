import { Resolvers } from './resolvers.generated'
import { wait } from '@apollo/client/testing'

export const resolvers: Resolvers = {
  Query: {
    basicRootQuery: () => 'Hello',
    reallySlowOne: async () => {
      await wait(1000)

      return 'I was really slow!'
    },
  },
}
