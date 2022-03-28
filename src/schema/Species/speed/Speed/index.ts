import { gql } from 'apollo-server';

import avg from './avg';

const typeDefs = gql`
  type Speed {
    max: Int!
    min: Int!
  }
`;

export default {
  typeDefs: [
    typeDefs,
    avg.typeDefs,
  ],
  resolvers: [
    avg.resolvers,
  ],
};
