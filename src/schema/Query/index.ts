import { gql } from 'apollo-server';

import getCharacter from './getCharacter';
import getPlanet from './getPlanet';

const typeDefs = gql`
  type Query @auth
`;

export default {
  typeDefs: [
    typeDefs,
    getCharacter.typeDefs,
    getPlanet.typeDefs,
  ],
  resolvers: [
    getCharacter.resolvers,
    getPlanet.resolvers,
  ],
};
