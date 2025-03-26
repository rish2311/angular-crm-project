import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="sidebar">
      <ul>
        <li><a routerLink="/dashboard">Dashboard</a></li>
        <li><a routerLink="/users">Users</a></li>
        <li><a routerLink="/products">Products</a></li>
        <li><a routerLink="/categories">Categories</a></li>
        <li><a routerLink="/orders">Orders</a></li>
      </ul>
    </nav>
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
