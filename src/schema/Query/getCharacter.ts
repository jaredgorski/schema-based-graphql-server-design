import { gql } from 'apollo-server';

import { Resolvers } from '../types.codegen';

const typeDefs = gql`
  type Query {
    getCharacter(id: String!): Character!
  }
`;

const resolvers: Resolvers = {
  Query: {
    getCharacter: (parent, args, context) => {
      return context.data.characters.findById(args.id);
    },
  },
};

export default { typeDefs, resolvers };
