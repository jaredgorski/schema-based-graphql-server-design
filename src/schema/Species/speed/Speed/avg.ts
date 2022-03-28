import { gql } from 'apollo-server';

import { Resolvers } from '../../../types.codegen';

const typeDefs = gql`
  type Speed {
    avg: Int!
  }
`;

const resolvers: Resolvers = {
  Speed: {
    avg: (parent) => {
      const { max, min } = parent;

      return (max + min) / 2;
    },
  },
};

export default { typeDefs, resolvers };
