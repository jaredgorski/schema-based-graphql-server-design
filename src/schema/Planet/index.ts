import { gql } from 'apollo-server';

const typeDefs = gql`
  type Planet {
    id: ID!
    name: String!
    climate: String!
  }
`;

export default { typeDefs };
