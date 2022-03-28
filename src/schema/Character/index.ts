import { gql } from 'apollo-server';

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
    planet.typeDefs,
  ],
  resolvers: [
    planet.resolvers,
  ],
};
