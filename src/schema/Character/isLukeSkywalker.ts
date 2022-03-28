import { gql } from 'apollo-server';

import { Resolvers } from '../types.codegen';

const typeDefs = gql`
  type Character {
    isLukeSkywalker: Boolean!
  }
`;

const resolvers: Resolvers = {
  Character: {
    isLukeSkywalker: (parent) => {
      return parent.name === 'Luke Skywalker';
    },
  },
};

export default { typeDefs, resolvers };
