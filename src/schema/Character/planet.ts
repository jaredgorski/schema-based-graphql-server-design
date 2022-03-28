import { gql } from 'apollo-server';

import { Resolvers } from '../types.codegen';

const typeDefs = gql`
  type Character {
    planet: Planet!
  }
`;

const resolvers: Resolvers = {
  Character: {
    planet: (parent, args, context) => {
      return context.data.planets.findByName(parent.planet);
    },
  },
};

export default { typeDefs, resolvers };
