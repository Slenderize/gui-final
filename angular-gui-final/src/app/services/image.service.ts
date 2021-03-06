import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<GalleryImage[]> {
      return this.db.list('uploads').snapshotChanges().map(actions => {
          return actions.map(action => ({$key: action.key, ...action.payload.val()}));
      });
  }
//image will be stored and then it will return the database value
  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
    .then((snap) => snap.val());
  }
}
