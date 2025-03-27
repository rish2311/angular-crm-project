import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';

import { SidebarComponent } from './components/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],

  template: `
    <app-header></app-header>
    <div class="layout-container">
      <app-sidebar></app-sidebar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .layout-container {
        display: flex;
        height: calc(100vh - 70px); /* Adjust based on header height */
      }
      .main-content {
        flex: 1;
        background-color: #ffffff; /* Change as needed */
        overflow-y: auto;
      }
    `,
  ],
})
export class AppComponent {}
