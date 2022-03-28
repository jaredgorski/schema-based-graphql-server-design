import { gql } from 'apollo-server';

import { Resolvers } from '../types.codegen';

const typeDefs = gql`
  type Mutation {
    updateCharacterName(input: UpdateCharacterNameInput): Character!
  }

  input UpdateCharacterNameInput {
    id: ID!
    name: String!
  }
`;

const resolvers: Resolvers = {
  Mutation: {
    updateCharacterName: (parent, args, context) => {
      if (!args.input) {
        throw new Error('Input required.');
      }

      const { id, name } = args.input;

      return context.data.characters.updateById(id, { name });
    },
  },
};

export default { typeDefs, resolvers };
