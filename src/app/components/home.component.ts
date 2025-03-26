import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">
      <h2>Welcome to Angular CRM Dashboard</h2>
      <p>We use the sidebar to navigate</p>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;
      padding: 2rem;
    }
  `]
})
export class HomeComponent {}
