import { rest } from 'msw';
import { buildCategory } from '../factory/category';
import { buildProduct, Product } from '../factory/product';

export const categories = {
  streamers: buildCategory({ name: 'Streamers' }),
  nymphs: buildCategory({ name: 'Nymphs' }),
  dries: buildCategory({ name: 'Dries' }),
};

export const subcategories = {
  jigs: buildCategory({ name: 'Jigs', parentId: categories.nymphs.id }),
  articulated: buildCategory({
    name: 'Articulated',
    parentId: categories.streamers.id,
  }),
  softHackles: buildCategory({
    name: 'Soft Hackles',
    parentId: categories.nymphs.id,
  }),
  terrestrials: buildCategory({
    name: 'Terrestrials',
    parentId: categories.dries.id,
  }),
};

export const flies: Record<string, Product> = {
  jigHeadPheasantTail: buildProduct({
    name: 'Jighead Pheasant Tail',
    categoryId: subcategories.jigs.id,
  }),
  beadheadPheasantTail: buildProduct({
    name: 'Beadhead Pheasant Tail',
    categoryId: categories.nymphs.id,
  }),
  softHackPheasantTail: buildProduct({
    name: 'Soft Hackle Pheasant Tail',
    categoryId: subcategories.softHackles.id,
  }),
  copperJohn: buildProduct({
    name: 'Copper John',
    categoryId: categories.nymphs.id,
  }),
  parachuteAdams: buildProduct({
    name: 'Parachute Adams',
    categoryId: categories.dries.id,
  }),
  chubbyChernobyl: buildProduct({
    name: 'Chubby Chernobyl',
    categoryId: subcategories.terrestrials.id,
  }),
  elkHairCaddis: buildProduct({
    name: 'Elk Hair Caddis',
    categoryId: categories.nymphs.id,
  }),
  woolyBugger: buildProduct({
    name: 'Wooly Bugger',
    categoryId: categories.streamers.id,
  }),
  miniSexDungeon: buildProduct({
    name: 'Mini Sex Dungeon',
    categoryId: subcategories.articulated.id,
  }),
};

export const handlers = (baseUrl: string) => [
  rest.get(`${baseUrl}/categories`, (_, res, ctx) =>
    res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json([categories.streamers, categories.nymphs, categories.dries]),
    ),
  ),
  rest.get(`${baseUrl}/shop`, (_, res, ctx) => {
    const list = Object.keys(flies).map(fly => flies[fly]);
    return res(ctx.delay(200), ctx.status(200), ctx.json(list));
  }),
];
