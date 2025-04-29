import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/gql/server/**/*.graphqls',
  documents: ['src/**/*.graphql'],
  generates: {
    './src/gql/graphql-operations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './src/gql/server/resolvers.generated.ts': {
      plugins: ['typescript', 'typescript-resolvers', { add: { content: '/* eslint-disable */' } }],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
}
export default config
