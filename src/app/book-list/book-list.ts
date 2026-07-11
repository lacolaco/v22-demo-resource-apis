import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './book-list.html',
  styles: ``,
})
export class BookList {
  booksResource = httpResource<Book[]>(() => '/api/books');
}
