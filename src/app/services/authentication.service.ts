import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser : any 
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth,private firestore : AngularFirestore) { 
    this.auth.onAuthStateChanged((user)=>{ // check user if loged in
      this.currentUser = user;
  })
  }

  login(username: string, password:string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe
     (switchMap(({ user}) => updateProfile(user, {displayName:name }))); 

  }

  logout(){
    return from(this.auth.signOut());
  }
}
