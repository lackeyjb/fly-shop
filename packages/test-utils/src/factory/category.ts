import faker from 'faker';

export interface Category {
  id: string;
  image: string;
  name: string;
  parentId: string | null;
}

export function buildCategory(overrides?: Partial<Category>): Category {
  const category = {
    id: faker.random.uuid(),
    image: faker.image.imageUrl(200, 200),
    name: faker.commerce.department(),
    parentId: null,
  };

  return { ...category, ...overrides };
}
