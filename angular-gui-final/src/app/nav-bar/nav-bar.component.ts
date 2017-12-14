import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title: 'Gallery';
  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService, private router: Router) { }
//check if the user is auth
  ngOnInit() {
    this.user = this.authService.authUser();
  }
//will redirect to outside of the gallery page back to the login
  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
