import { gql } from 'apollo-server';

import { Resolvers } from '../../types.codegen';

const typeDefs = gql`
  type Surface {
    mainFeature: String!
  }
`;

const resolvers: Resolvers = {
  Surface: {
    mainFeature: (parent) => {
      return parent.features[0];
    },
  },
};

export default { typeDefs, resolvers };
