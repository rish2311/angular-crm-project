// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './components/guard/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'admin', component: AdminComponent, canActivate: [authGuard] },

      { path: 'login', component: LoginComponent },
    ],
  },
];
