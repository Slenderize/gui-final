import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router) { }
//using AuthenticationService to check with the database to see if the login info miss and if it does
  signIn() {
    this.authService.login({ email: this.email, password: this.password })
    //it will redirect the page to gallery
      .then(resolve => this.router.navigate(['gallery']))
      //not a match, then an error will appear
      .catch(error => this.errorMsg = error.message);
  }
}
