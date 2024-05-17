import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(userid:any,password:any) {
    
    if(userid == 'ram' && password=='123'){
      sessionStorage.setItem("isLoggedIn","true")
    }else{
      sessionStorage.setItem("isLoggedIn","false")
    }

  }
}
