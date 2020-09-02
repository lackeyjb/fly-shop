import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = (baseUrl: string) => setupWorker(...handlers(baseUrl));
