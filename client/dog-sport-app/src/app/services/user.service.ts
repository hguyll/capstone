import { Injectable } from '@angular/core';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  getUserIfRegistered(): Member {
    return JSON.parse(localStorage.getItem('user'));
  }

  submitUser(formValues) {
    let user: Member = formValues;
    user.Registered = true;
    console.log("Registering User");
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
