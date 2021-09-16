import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from '../models/member';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signedUp: boolean = false;
  signUpForm: FormGroup;
  member: Member;

  constructor(private userService: UserService, fb: FormBuilder) {
    this.signUpForm = fb.group({
      'MemberName': [],
      'MemberEmail': [],
      'MemberPhone': [],
      'MemberDogName': [],
      'MemberDogBreed': []
    });
  }

  ngOnInit(): void { }

  getSignedUp(): boolean {
    const isRegistered = this.userService.getUserIfRegistered();
    if (isRegistered) {
      this.member = isRegistered;
      return true;
    }
  }

  signUp(signUpFormData) {
    this.userService.submitUser(signUpFormData);
  }
}
