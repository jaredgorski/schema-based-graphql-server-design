import { gql } from 'apollo-server';

import updateCharacterName from './updateCharacterName';

const typeDefs = gql`
  type Mutation @auth
`;

export default {
  typeDefs: [
    typeDefs,
    updateCharacterName.typeDefs,
  ],
  resolvers: [
    updateCharacterName.resolvers,
  ],
};
