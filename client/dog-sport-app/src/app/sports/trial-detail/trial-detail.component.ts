import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trial } from 'src/app/models/trial';

@Component({
  selector: 'app-trial-detail',
  templateUrl: './trial-detail.component.html',
  styleUrls: ['./trial-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrialDetailComponent implements OnInit, OnChanges{
  @Input()trial: Trial;
  @Output() update = new EventEmitter<Trial>();
  editing = false;
  detailForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(): void {
    this.detailForm = this.fb.group({
      'GroupId': [this.trial?.GroupId],
      'GroupName': [this.trial?.GroupName],
      'Date': [this.trial?.Date],
      'EventName': [this.trial?.Date],
      'OrganizationName': [this?.trial.OrganizationName],
      'SponsorName': [this?.trial.SponsorName],
      'SponsorPhone': [this?.trial.SponsorPhone],
      'SponsorEmail': [this?.trial.SponsorEmail],
      'MaxGroupSize': [this?.trial.MaxGroupSize]
    });
  }

  ngOnInit(): void { }

  updateTrial(formValues): void {
    const updatedTrial = formValues;
    this.update.emit(updatedTrial);
  }

}
