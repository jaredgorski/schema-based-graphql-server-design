import Character from './Character';
import Mutation from './Mutation';
import Planet from './Planet';
import Query from './Query';
import Species from './Species';
import customScalars from './custom-scalars';
import directives from './directives';
import makeSchema from './helpers/schema';

export default makeSchema([
  customScalars,
  directives,

  Character,
  Mutation,
  Planet,
  Query,
  Species,
]);
