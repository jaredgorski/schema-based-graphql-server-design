import { gql } from 'apollo-server';

import { Resolvers, Speed as SpeedType } from '../../types.codegen';

import Speed from './Speed';

const typeDefs = gql`
  type Species {
    speed: Speed
  }
`;

const resolvers: Resolvers = {
  Species: {
    speed: (parent) => {
      return parent.metadata.speed as SpeedType;
    },
  },
};

export default {
  typeDefs: [
    typeDefs,
    Speed.typeDefs,
  ],
  resolvers: [
    resolvers,
    Speed.resolvers,
  ],
};
