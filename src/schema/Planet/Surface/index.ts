import { gql } from 'apollo-server';

import mainFeature from './mainFeature';

const typeDefs = gql`
  type Surface {
    name: String!
    features: [String!]!
  }
`;

export default {
  typeDefs: [
    typeDefs,
    mainFeature.typeDefs,
  ],
  resolvers: [
    mainFeature.resolvers,
  ],
};
