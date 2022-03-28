import { gql } from 'apollo-server';

import planets from './planets';
import speed from './speed';

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
    speed.typeDefs,
  ],
  resolvers: [
    planets.resolvers,
    speed.resolvers,
  ],
};
