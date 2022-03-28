interface Document {
  id: string;
  name: string;
}

export interface Character extends Document {
  planet: string;
}

export interface Planet extends Document {
  climate: string;
}

export interface Species extends Document {
  planets: string[];
}

export const data = {
  characters: [
    {
      id: '1',
      name: 'Luke Skywalker',
      planet: 'Tatooine',
    },
    {
      id: '2',
      name: 'Han Solo',
      planet: 'Corellia',
    },
  ],
  planets: [
    {
      id: '3',
      name: 'Tatooine',
      climate: 'Desert',
    },
    {
      id: '4',
      name: 'Corellia',
      climate: 'Temperate',
    },
  ],
  species: [
    {
      id: '5',
      name: 'Human',
      planets: [
        'Tatooine',
        'Corellia',
        'Naboo',
      ],
    },
  ],
};

export class Collection<T extends Document> {
  data: T[];

  constructor(data: T[]) {
    this.data = data;
  }

  findById(id: string) {
    const result = this.data.find((doc) => doc.id === id);

    if (!result) {
      throw new Error(`Item ${id} not found.`);
    }

    return result;
  }

  findByName(name: string) {
    const result = this.data.find((doc) => doc.name === name);

    if (!result) {
      throw new Error(`Item ${name} not found.`);
    }

    return result;
  }
}
