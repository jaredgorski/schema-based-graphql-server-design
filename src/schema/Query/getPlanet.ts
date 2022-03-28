import { gql } from 'apollo-server';

import { Resolvers } from '../types.codegen';

const typeDefs = gql`
  type Query {
    getPlanet(id: String!): Planet!
  }
`;

const resolvers: Resolvers = {
  Query: {
    getPlanet: (parent, args, context) => {
      return context.data.planets.findById(args.id);
    },
  },
};

export default { typeDefs, resolvers };
