import { Component } from '@angular/core';
import { defineRouteMeta } from '@analogjs/router';
export const routeMeta = defineRouteMeta({
  title: 'About us',
});
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>Hello Analog</h2>

    Analog is a meta-framework on top of Angular.
  `,
})
export default class AboutPageComponent { }
