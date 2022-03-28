import { gql } from 'apollo-server';

import planets from './planets';

const typeDefs = gql`
  type Species {
    id: ID!
    name: String!
  }
`;

export default {
  typeDefs: [
    typeDefs,
    planets.typeDefs,
  ],
  resolvers: [
    planets.resolvers,
  ],
};
