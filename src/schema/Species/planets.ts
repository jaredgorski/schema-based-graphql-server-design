import { gql } from 'apollo-server';

import { Resolvers } from '../types.codegen';

const typeDefs = gql`
  type Species {
    planets: [Planet!]!
  }
`;

const resolvers: Resolvers = {
  Species: {
    planets: (parent, args, context) => {
      return parent.planets.map((planet) => {
        return context.data.planets.findByName(planet);
      });
    },
  },
};

export default { typeDefs, resolvers };
