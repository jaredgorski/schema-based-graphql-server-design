import { GraphQLSchema } from 'graphql';

import auth from './auth';

const directives = [
  auth.directive,
];

export function applyDirectives(schema: GraphQLSchema) {
  return directives.reduce((schemaObj, directive) => directive(schemaObj), schema);
}

export default {
  typeDefs: [
    auth.typeDefs,
  ],
};
