import { gql } from 'apollo-server';

import isLukeSkywalker from './isLukeSkywalker';
import planet from './planet';

const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
  }
`;

export default {
  typeDefs: [
    typeDefs,
    isLukeSkywalker.typeDefs,
    planet.typeDefs,
  ],
  resolvers: [
    isLukeSkywalker.resolvers,
    planet.resolvers,
  ],
};
