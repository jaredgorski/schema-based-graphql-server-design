import { GraphQLSchema, defaultFieldResolver } from 'graphql';
import { MapperKind, getDirective, mapSchema } from '@graphql-tools/utils';
import { gql } from 'apollo-server';

const typeDefs = gql`
  directive @auth on OBJECT
`;

function directive(schema: GraphQLSchema) {
  const directiveName = 'auth';

  const typeDirectiveArgumentMaps: Record<string, unknown> = {};

  return mapSchema(schema, {
    [MapperKind.TYPE]: type => {
      const authDirective = getDirective(schema, type, directiveName)?.[0];

      if (authDirective) {
        typeDirectiveArgumentMaps[type.name] = authDirective;
      }

      return undefined;
    },
    [MapperKind.OBJECT_FIELD]: (fieldConfig, fieldName, typeName) => {
      const authDirective =
        getDirective(schema, fieldConfig, directiveName)?.[0] ??
        typeDirectiveArgumentMaps[typeName];

      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = (parent, args, context, info) => {
          console.log('Validating authorization...');

          return resolve(parent, args, context, info);
        };

        return fieldConfig;
      }
    },
  });
}

export default {directive, typeDefs};
