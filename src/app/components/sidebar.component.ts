import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  standalone: true,
  template: `
  `,
  styles: [`
    .sidebar {
      width: 200px;
      background-color: #f2f2f2;
      padding: 1rem;
      box-shadow: 2px 0 4px rgba(0,0,0,0.1);
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    a:hover {
      color: #1976d2;
    }
  `]
})
export class SidebarComponent {}
