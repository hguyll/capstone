import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Trial } from '../../models/trial';

@Component({
  selector: 'app-dock-diving',
  templateUrl: './dock-diving.component.html',
  styleUrls: ['./dock-diving.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DockDivingComponent implements OnInit {
  trialList: Trial[];
  trial: Trial;
  private getTrialsSubscription: any;
  private getTrialDetailSubscription: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDivingTrials();
  }

  retrieveTrial(selectedTrial: Trial): void {
    console.log(selectedTrial);
    console.log(selectedTrial.GroupId);
    this.getTrialDetailSubscription = this.dataService.getTrialById<Trial>(selectedTrial.GroupId).subscribe(
      (trialDetail) => this.showTrial(trialDetail),
      (error) => console.log(`error: {error}`)
    );
  }

  showTrial(trial) {
    this.trial = trial;
    console.log(this.trial);
  }

  getDivingTrials(): void {
    this.getTrialsSubscription = this.dataService.getAllTrials<Trial[]>().subscribe(
      (allTrials) => {
        this.trialList = allTrials.filter(trials => {
          return trials.OrganizationName === "Dock Diving";
        });
      }
    );
  }

  ngOnDestroy(){
    this.getTrialsSubscription.unsubscribe();
    this.getTrialDetailSubscription.unsubscribe();
  }
}
