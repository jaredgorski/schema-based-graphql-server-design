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
  metadata: {
    speed: {
      max: number;
      min: number;
    };
  };
  planets: string[];
}

export const data = {
  characters: [
    {
      id: '1',
      createdAt: 1648496565147,
      name: 'Luke Skywalker',
      planet: 'Tatooine',
    },
    {
      id: '2',
      createdAt: 1648496565147,
      name: 'Han Solo',
      planet: 'Corellia',
    },
  ],
  planets: [
    {
      id: '3',
      createdAt: 1648496565147,
      name: 'Tatooine',
      climate: 'Arid',
      surface: {
        name: 'Desert',
        features: [
          'Sand',
          'Rocks',
        ],
      },
    },
    {
      id: '4',
      createdAt: 1648496565147,
      name: 'Corellia',
      climate: 'Temperate',
      surface: {
        name: 'Forest',
        features: [
          'Trees',
          'Soil',
        ],
      },
    },
  ],
  species: [
    {
      id: '5',
      createdAt: 1648496565147,
      name: 'Human',
      metadata: {
        speed: {
          max: 8,
          min: 3,
        },
      },
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
    this.data = [ ...data ];
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

  updateById(id: string, update: Partial<T>) {
    const index = this.data.map((doc) => doc.id).indexOf(id);

    if (typeof index === 'undefined') {
      throw new Error(`Item ${id} not found.`);
    }

    this.data[index] = {
      ...this.data[index],
      ...update,
    };
  }
}
