import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink, CurrencyPipe, DatePipe],
  templateUrl: './book-detail.html',
  styles: ``,
})
export class BookDetail {
  id = input.required<string>();

  bookResource = httpResource<Book>(() => `/api/books/${this.id()}`);
}
