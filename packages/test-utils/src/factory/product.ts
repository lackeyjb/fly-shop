import faker from 'faker';

export interface Product {
  id: string;
  image: string;
  name: string;
  categoryId: string;
  description: string;
  price: number;
  options: {
    colors: readonly string[];
    sizes: readonly number[];
  };
}

export function buildProduct(overrides?: any) {
  const product = {
    id: faker.random.uuid(),
    image: faker.image.imageUrl(200, 200),
    name: faker.commerce.product(),
    categoryId: faker.random.uuid(),
    description: faker.lorem.paragraph(),
    price: faker.commerce.price(),
    options: {
      colors: [
        faker.commerce.color(),
        faker.commerce.color(),
        faker.commerce.color(),
      ],
      sizes: [12, 14, 16, 18, 20],
    },
  };

  return { ...product, ...overrides };
}
