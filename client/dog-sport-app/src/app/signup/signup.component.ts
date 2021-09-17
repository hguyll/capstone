import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from '../models/member';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  signedUp: boolean = false;
  signUpForm: FormGroup;
  member: Member;
  submitted: boolean = false;

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
    this.submitted = true;
    this.userService.submitUser(signUpFormData);
  }
}
