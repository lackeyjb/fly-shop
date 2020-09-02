import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = (baseUrl: string) => setupServer(...handlers(baseUrl));
