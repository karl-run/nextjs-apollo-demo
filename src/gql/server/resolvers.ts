import { Deep, Resolvers } from './resolvers.generated'
import { wait } from '@apollo/client/testing'

export const resolvers: Resolvers = {
  Query: {
    basicRootQuery: () => 'Hello',
    reallySlowOne: async () => {
      await wait(1000)

      return 'I was really slow!'
    },
    deepNested: () => {
      throw new Error('This is a test error')
    },
    deepNesteds: (): Deep[] => {
      const mockCount = 10000
      return Array.from(
        { length: mockCount },
        (_, i) =>
          ({
            id: `deep-${i}`,
            name: `DeepNested ${i}`,
            description: `This is a deep nested object ${i}`,
            someChild: {
              id: `deep-child-${i}`,
              name: `DeepChild ${i}`,
              description: `This is a deep child object ${i}`,
              evenDeeper: {
                id: `deep-child-even-deep-${i}`,
                name: `DeepChildEvenDeeper ${i}`,
                description: `This is a deep child even deeper object ${i}`,
              },
            },
          }) satisfies Deep,
      )
    },
  },
}
