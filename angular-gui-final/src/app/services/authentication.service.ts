import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
//using firebase to check with the database to see if the user login is the same as the one in the cloud.
  login(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
//logout function
  logout() {
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }

}
