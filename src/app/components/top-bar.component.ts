import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/">
      <h1>My Store</h1>
    </a>
    <a href="/products" class="button fancy-button">
      <i class="material-icons">Products</i>Products
    </a>
  `,
})
export class TopBarComponent { }
