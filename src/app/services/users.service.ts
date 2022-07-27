import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../models/user-profile';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        return this.firestore
          .doc<ProfileUser>(`users/${user?.uid}`)
          .valueChanges();
      })
    );
  }

  get allUsers$(): Observable<ProfileUser[]> {
    return this.firestore.collection<ProfileUser>('users').valueChanges();
  }

  constructor(
    public firestore: AngularFirestore,
    public authService: AuthenticationService
  ) {}

  addUser(user: ProfileUser): Observable<any> {
    const userDoc = this.firestore.doc<ProfileUser>(`users/${user?.uid}`);
    return from(userDoc.set(user));
  }

  updateUser(user: ProfileUser): Observable<any> {
    const userDoc = this.firestore.doc<ProfileUser>(`users/${user?.uid}`);
    return from(userDoc.update(user));
  }
}
