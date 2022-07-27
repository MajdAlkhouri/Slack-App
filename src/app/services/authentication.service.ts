import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser: any;
  currentUser$ = this.auth.user;

  constructor(private auth: AngularFireAuth) {}

  login(username: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(username, password));
  }

  signUp(email: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(email, password));
  }

  // updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
  //   const user = this.auth.currentUser;
  //   return of(user).pipe(
  //     concatMap((user) => {
  //       if (!user) throw new Error('Not Authenticated');

  //       return updateProfile(user, profileData);
  //     })
  //   );
  // }

  logout() {
    return from(this.auth.signOut());
  }
}
