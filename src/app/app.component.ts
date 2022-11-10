import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-top-bar></app-top-bar>
  <div>
    <router-outlet></router-outlet>
  </div>`,
  imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent {}
