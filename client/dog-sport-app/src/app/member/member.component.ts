import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from '../models/member';
import { Trial } from '../models/trial';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MemberComponent implements OnInit {

  @Input() trialDetails: Trial;
  showAddMemberForm: boolean;
  rowForm: FormGroup;
  displayError: boolean = false;
  private showSubmitButton: boolean;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.rowForm = fb.group({
      'MemberName': [],
      'MemberEmail': [],
      'MemberPhone': [],
      'MemberDogName': [],
      'MemberDogBreed': []
    });
  }

  toggleAddMember() {
    this.showAddMemberForm = !this.showAddMemberForm;
    this.showSubmitButton = !this.showSubmitButton;
  }

  submitMember() {
    this.showAddMemberForm = false;
    this.showSubmitButton = false;
    
  }

  ngOnInit(): void {}

  addMember(formValues) {
    let currentMember: Member;
    if(this.rowForm.invalid) {
      this.displayError = true;
      console.log("ERROR: Invalid form. Fix errors and try again.");
    } else {
      this.displayError = false;
      this.showAddMemberForm = false;
    }
    currentMember = formValues;
    currentMember.MemberRole = 'user';
    this.dataService.addMemberToTrial(this.trialDetails.GroupId, currentMember).subscribe(
      trial => {
        console.log("Successfully added member");
        console.log(trial);
        this.trialDetails.Members.push(currentMember);
      }, 
      error => {
        console.log("There was an error");
      });
  }
}
