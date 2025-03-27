import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: '',
  }

  apiLoginObj: any = {
    "EmailId": "",
    "Password": "",
}

  router = inject(Router);
  http = inject(HttpClient)

  onLogin() {
    console.log(this.loginObj)

    if(this.loginObj.username == "admin" && this.loginObj.password == "1122") {
      this.router.navigateByUrl("home")

    } else{
      alert("wrong credentials")
    } 

    // this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res:any)=>{


    //   localStorage.setItem("CRMUser", res.data.userId)
    //   this.router.navigateByUrl("admin")
    // }
    // , error=> {
    //   alert('Wrong Credentials')
    // })
  }
}
