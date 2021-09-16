import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  saved: boolean = false;
  displayFailureError = false;
  errorUploading = false;

  constructor(private dataService: DataService, private router: Router, fb: FormBuilder, private route: ActivatedRoute) {
    if (this.route) {
      this.organizationName = this.route.snapshot.paramMap.get('sport')
    }
    this.createForm = fb.group({
      'GroupName': [null, Validators.required],
      'Date': [null, Validators.required],
      'OrganizationName': [null],
      'SponsorName': [null, Validators.required],
      'SponsorPhone': [null, Validators.required],
      'SponsorEmail': [null, Validators.required],
      'MaxGroupSize': [null, Validators.required]
    });
  }

  ngOnInit(): void { }

  cancelCreate() {
    this.router.navigate(['/sport', this.organizationName]);
  }

  addTrial(formValues) {
    let currentTrial: Trial;
    if (this.createForm.invalid) {
      console.log(this.createForm);
      this.displayFailureError = true;
    } else {
      currentTrial = formValues;
      currentTrial.OrganizationName = this.organizationName;
      this.dataService.createTrial(currentTrial).subscribe(
        trial => {
          console.log("Successfully added trial");
          this.router.navigate(['/sport', this.organizationName]);
        },
        error => {
          this.errorUploading = true;
          console.log("There was an error");
        });
    }
  }
}
