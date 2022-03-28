import {TimestampResolver} from 'graphql-scalars';
import {gql} from 'apollo-server';

import {Resolvers} from '../types.codegen';

const typeDefs = gql`
  scalar Timestamp
`;

const resolvers: Resolvers = {
  Timestamp: TimestampResolver,
};

export default { typeDefs, resolvers };
