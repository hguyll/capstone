import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trial } from 'src/app/models/trial';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trial-detail',
  templateUrl: './trial-detail.component.html',
  styleUrls: ['./trial-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrialDetailComponent implements OnInit, OnChanges {
  private getTrialDetailSubscription: any;
  @Input() trial: Trial;
  editing = false;
  detailForm: FormGroup;
  groupId: string;
  displayError: boolean = false;

  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.detailForm = this.fb.group({
      'GroupId': [null],
      'GroupName': [null],
      'Date': [null],
      'EventName': [null],
      'OrganizationName': [null],
      'SponsorName': [null],
      'SponsorPhone': [null],
      'SponsorEmail': [null],
      'MaxGroupSize': [null],
    });
    this.groupId = this.route.snapshot.paramMap.get('eventId');
    this.getTrialDetailSubscription = this.dataService.getTrialById<Trial>(this.groupId).subscribe(
      (trialDetail) => this.showTrial(trialDetail),
      (error) => console.log(`error: {error}`)
    );
  }

  showTrial(trial: Trial) {
    this.trial = trial;
    this.detailForm.setValue({
      'GroupId': trial?.GroupId,
      'GroupName': trial?.GroupName,
      'Date': trial?.Date,
      'EventName': trial?.Date,
      'OrganizationName': trial.OrganizationName,
      'SponsorName': trial.SponsorName,
      'SponsorPhone': trial.SponsorPhone,
      'SponsorEmail': trial.SponsorEmail,
      'MaxGroupSize': trial.MaxGroupSize
    });
  }

  ngOnChanges(): void {
    this.detailForm = this.fb.group({
      'GroupId': [null],
      'GroupName': [null],
      'Date': [null],
      'EventName': [null],
      'OrganizationName': [null],
      'SponsorName': [null],
      'SponsorPhone': [null],
      'SponsorEmail': [null],
      'MaxGroupSize': [null]
    });
  }

  ngOnInit(): void { }

  deleteTrial() {
    this.getTrialDetailSubscription = this.dataService.deleteTrialById<Trial>(this.trial.GroupId).subscribe(
      (trialDetail) => {
        console.log("Successfully Deleted trial.");
        this.router.navigate(['..', this.trial.OrganizationName]);
      },
      (error) => console.log(`Error Deleting file: {error}`)
    );
  }

  updateTrial(formValues) {
    const updatedTrial: Trial = formValues;
    this.dataService.updateTrial(updatedTrial).subscribe(
      trial => {
        console.log("Successfully updated trial");
        this.router.navigate(['sport', this.trial.OrganizationName]);
      },
      error => {
        this.displayError = true;
        console.log("There was an error");
      });
  }
}
