import { ApolloServer } from 'apollo-server';

import context from './context';
import schema from './schema';

const server = new ApolloServer({
  context: () => context,
  schema,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url} 🚀`);
  })
  .catch((err) => {
    throw new Error(err as string);
  });
