import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trial } from 'src/app/models/trial';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-trial',
  templateUrl: './create-trial.component.html',
  styleUrls: ['./create-trial.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTrialComponent implements OnInit {

  @Input() organizationName: string;
  createForm: FormGroup;

  constructor(private dataService: DataService, fb: FormBuilder) {
    this.createForm = fb.group({
      'GroupName': [null],
      'OrganizationName': [null],
      'SponsorName': [null],
      'SponsorPhone': [null],
      'SponsorEmail': [null],
      'MaxGroupSize': [null]
    });
  }

  ngOnInit(): void {
  }

  addTrial(formValues) {;
    let currentTrial: Trial;
    if(this.createForm.invalid) {
      console.log("ERROR: Invalid form. Fix errors and try again.");
    }
    currentTrial = formValues;
    currentTrial.OrganizationName = this.organizationName;
    this.dataService.createTrial(currentTrial).subscribe(
      trial => {
        console.log("Successfully added trial");
        console.log(trial);
      }, 
      error => {
        console.log("There was an error");
      });
  }
}
