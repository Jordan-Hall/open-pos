import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { defineRouteMeta } from '@analogjs/router';

export const routeMeta = defineRouteMeta({
  title: 'Product List',
});

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Products</h2>

  `,
})
export default class ProductListComponent {
  products = [];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
