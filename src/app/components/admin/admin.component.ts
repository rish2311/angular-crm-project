import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  userCreateObj = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  router = inject(Router);
  http = inject(HttpClient);

  onSubmit() { // Renamed from onLogin to onSubmit
    console.log(this.userCreateObj);
    alert('User created successfully');
    // You can add your HTTP request logic here
  }
}