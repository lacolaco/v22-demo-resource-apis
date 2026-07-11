import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="bg-sky-700 text-white shadow-md">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <a routerLink="/" class="text-xl font-bold tracking-tight">📚 Bookstore</a>
        <span class="text-sm text-sky-200">Angular v22 Resource API Demo</span>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-8">
      <router-outlet />
    </main>
  `,
})
export class App {}
