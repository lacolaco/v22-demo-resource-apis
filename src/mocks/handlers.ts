import { http, HttpResponse, delay } from 'msw';
import { books } from './data';

export const handlers = [
  http.get('/api/books', async () => {
    await delay(500);
    return HttpResponse.json(books);
  }),

  http.get('/api/books/:id', async ({ params }) => {
    await delay(300);
    const book = books.find((b) => b.id === Number(params['id']));
    if (!book) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(book);
  }),
];
