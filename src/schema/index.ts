import Character from './Character';
import Planet from './Planet';
import Query from './Query';
import Species from './Species';

import directives from './directives';

import makeSchema from './helpers/schema';

export default makeSchema([
  Character,
  Planet,
  Query,
  Species,

  directives,
]);
