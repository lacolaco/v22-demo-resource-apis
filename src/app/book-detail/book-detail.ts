import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink, CurrencyPipe, DatePipe],
  template: `
    <a routerLink="/" class="mb-6 inline-flex items-center text-sm text-sky-600 hover:text-sky-800">
      ← Back to list
    </a>

    @if (bookResource.isLoading()) {
      <div class="flex items-center justify-center py-12">
        <div class="h-8 w-8 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600"></div>
        <span class="ml-3 text-gray-500">Loading book details...</span>
      </div>
    } @else if (bookResource.error()) {
      <div class="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
        Book not found or failed to load.
      </div>
    } @else if (bookResource.hasValue()) {
      <article class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div class="flex flex-col md:flex-row">
          <img
            [src]="bookResource.value()!.coverImage"
            [alt]="bookResource.value()!.title"
            class="h-64 w-full object-cover md:h-auto md:w-72"
          />
          <div class="flex-1 p-6">
            <h1 class="text-2xl font-bold text-gray-800">{{ bookResource.value()!.title }}</h1>
            <p class="mt-1 text-gray-500">{{ bookResource.value()!.author }}</p>

            <p class="mt-4 text-3xl font-bold text-sky-700">
              {{ bookResource.value()!.price | currency: 'JPY' : 'symbol' : '1.0-0' }}
            </p>

            <p class="mt-4 leading-relaxed text-gray-600">
              {{ bookResource.value()!.description }}
            </p>

            <dl class="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt class="font-medium text-gray-500">Published</dt>
                <dd class="text-gray-800">{{ bookResource.value()!.publishedDate | date: 'mediumDate' }}</dd>
              </div>
              <div>
                <dt class="font-medium text-gray-500">ISBN</dt>
                <dd class="text-gray-800">{{ bookResource.value()!.isbn }}</dd>
              </div>
            </dl>

            <button
              class="mt-6 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    }
  `,
})
export class BookDetail {
  id = input.required<string>();

  bookResource = httpResource<Book>(() => `/api/books/${this.id()}`);
}
