import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>Angular CRM</h1>
    </header>
  `,
  styles: [`
    .header {
      background-color: #1976d2;
      color: white;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `]
})
export class HeaderComponent {}
