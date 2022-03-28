# Schema-based GraphQL server design

Explore `src/schema/` to see how the files are organized.

## About this design

This design adheres to 3 guidelines:

1. The server should be modularized by type.
2. Each type and field is a module and should:
    - be represented by a directory or file with the same name as the type or field
    - expose a default export which implements the following standard interface:

        ```typescript
        interface GraphQLModule {
          typeDefs: DocumentNode | RecursiveArray<DocumentNode>;
          resolvers?: Resolvers | RecursiveArray<Resolvers>;
        }
        ```
        _Note: If inheritResolversFromInterfaces is enabled, only custom fields need their own resolvers and typeDefs._
        
3. A type directory can be nested within another type directory as long as it isn’t used outside of the directory in which it’s nested. If a type is used only within a single field, that field’s file can be turned into a directory which contains the type directory and an index file which exports the field resolver and typeDefs.

The result of these guidelines is a GraphQL server structured in roughly the same way as the schema it generates, with some convenient nesting where possible. I recommend using this server design alongside a type generation solution (such as [GraphQL Code Generator](https://www.graphql-code-generator.com/)) and [`makeExecutableSchema`](https://www.graphql-tools.com/docs/generate-schema#api) (with `inheritResolversFromInterfaces: true`).

This design can be applied flexibly in most any GraphQL server project, federated or not.

## Instructions

To generate types:

```
npm run generate
```

To generate types and print the schema in the terminal:

```
npm run generate:print
```

To compile the app:

```
npm run build
```

To run the server:

1. Execute `dev` script

    ```
    npm run dev
    ```
2. Navigate to `http://localhost:4000`
3. Click "Query your server"
4. Explore the schema and run queries

![Screenshot of Apollo Studio](https://raw.githubusercontent.com/jaredgorski/schema-based-graphql-server-design/main/screenshot_apollo-studio.png)
