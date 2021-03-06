import { gql } from 'apollo-server';

import Surface from './Surface';

const typeDefs = gql`
  type Planet {
    id: ID!
    name: String!
    climate: String!
    surface: Surface!
  }
`;

export default {
  typeDefs: [
    typeDefs,
    Surface.typeDefs,
  ],
  resolvers: [
    Surface.resolvers,
  ],
};
