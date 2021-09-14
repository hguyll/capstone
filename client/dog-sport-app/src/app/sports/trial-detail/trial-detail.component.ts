import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Trial } from 'src/app/models/trial';

@Component({
  selector: 'app-trial-detail',
  templateUrl: './trial-detail.component.html',
  styleUrls: ['./trial-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrialDetailComponent implements OnInit {
  @Input()
  trial: Trial;

  editing = false;

  detailForm = new FormGroup({
    groupName: new FormControl(''),
    sponsorName: new FormControl('')
  });

  constructor() {

  }

  updateTrial(): void {

  }

  ngOnInit(): void {
    console.log("input");
    console.log(this.trial.GroupName);
  }
}
