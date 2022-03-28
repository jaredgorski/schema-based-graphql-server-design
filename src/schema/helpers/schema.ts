import { DocumentNode } from 'graphql';
import { RecursiveArray, flattenDeep, merge } from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { Resolvers } from '../types.codegen';
import { applyDirectives } from '../directives';

interface GraphQLModule {
  typeDefs: DocumentNode | RecursiveArray<DocumentNode>;
  resolvers?: Resolvers | RecursiveArray<Resolvers>;
}

interface FlattenedGraphQLModule {
  typeDefs: DocumentNode[];
  resolvers: Resolvers[];
}

interface MergedGraphQLModule {
  typeDefs: DocumentNode[];
  resolvers: Resolvers;
}

export default function makeSchema(modules: GraphQLModule[]) {
  const unifiedModule = modules.reduce(
    (merged: MergedGraphQLModule, module) => {
      const flattened = flattenModule(module);

      const typeDefs = [...merged.typeDefs, ...flattened.typeDefs];
      const resolvers = merge(
        merged.resolvers,
        mergeResolversArray(flattened.resolvers)
      );

      return {
        typeDefs,
        resolvers,
      };
    },
    {typeDefs: [], resolvers: {}}
  );
  
  let schema = makeExecutableSchema({
    ...unifiedModule,
    inheritResolversFromInterfaces: true,
  });

  schema = applyDirectives(schema);

  return schema;
}

function flattenModule(module: GraphQLModule): FlattenedGraphQLModule {
  const {typeDefs = [], resolvers = {}} = module;

  return {
    typeDefs: getFlattenedArray<DocumentNode>(typeDefs),
    resolvers: getFlattenedArray<Resolvers>(resolvers),
  };
}

function getFlattenedArray<T>(target: T | RecursiveArray<T>) {
  const deep: RecursiveArray<T> = Array.isArray(target) ? target : [target];

  return flattenDeep(deep);
}

function mergeResolversArray(resolversList: Resolvers[]): Resolvers {
  return resolversList.reduce((merged, resolvers) => {
    return merge(merged, resolvers);
  }, {});
}
