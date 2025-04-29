import { Resolvers } from './resolvers.generated'
import { wait } from '@apollo/client/testing'

export const resolvers: Resolvers = {
  Query: {
    basicRootQuery: () => 'Hello',
    reallySlowOne: async () => {
      await wait(1000)

      return 'I was really slow!'
    },
    bigNasty: async () => {
      console.info(`Starting big nasty ${new Date().toISOString()}`)

      return {
        fast: {
          when: performance.now(),
          value: "I'm real fast!",
        },
      }
    },
  },
  BigNasty: {
    slow: async () => {
      await wait(500)

      return {
        when: performance.now(),
        value: 'Slower',
      }
    },
    crazySlow: async () => {
      await wait(2500)

      return {
        when: performance.now(),
        value: 'The slowiest',
      }
    },
  },
}
