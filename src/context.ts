import {
  Character,
  Collection,
  Planet,
  Species,
  data,
} from './data';

export interface Context {
  data: {
    characters: Collection<Character>;
    planets: Collection<Planet>;
    species: Collection<Species>;
  }
}

const context: Context = {
  data: {
    characters: new Collection<Character>(data.characters),
    planets: new Collection<Planet>(data.planets),
    species: new Collection<Species>(data.species),
  },
} as const;

export default context;
