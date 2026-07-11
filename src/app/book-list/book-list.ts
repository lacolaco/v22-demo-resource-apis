import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, CurrencyPipe],
  template: `
    <h1 class="mb-6 text-2xl font-bold text-gray-800">Books</h1>

    @if (booksResource.isLoading()) {
      <div class="flex items-center justify-center py-12">
        <div class="h-8 w-8 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600"></div>
        <span class="ml-3 text-gray-500">Loading books...</span>
      </div>
    } @else if (booksResource.error()) {
      <div class="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
        Failed to load books. Please try again later.
      </div>
    } @else if (booksResource.hasValue()) {
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (book of booksResource.value(); track book.id) {
          <a
            [routerLink]="['/books', book.id]"
            class="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <img
              [src]="book.coverImage"
              [alt]="book.title"
              class="h-48 w-full object-cover transition group-hover:scale-105"
            />
            <div class="p-4">
              <h2 class="font-semibold text-gray-800 group-hover:text-sky-600">
                {{ book.title }}
              </h2>
              <p class="mt-1 text-sm text-gray-500">{{ book.author }}</p>
              <p class="mt-2 text-lg font-bold text-sky-700">
                {{ book.price | currency: 'JPY' : 'symbol' : '1.0-0' }}
              </p>
            </div>
          </a>
        }
      </div>
    }
  `,
})
export class BookList {
  booksResource = httpResource<Book[]>(() => '/api/books');
}
