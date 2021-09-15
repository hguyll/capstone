import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Trial } from '../../models/trial';

@Component({
  selector: 'app-dock-diving',
  templateUrl: './dock-diving.component.html',
  styleUrls: ['./dock-diving.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DockDivingComponent implements OnInit {
  trial: Trial;
  trialList: Trial[];
  showDetail: boolean = false;
  showUpdateForm: boolean = false;
  showAddNewForm: boolean = false;
  
  updatedTrial;
  private getTrialsSubscription: any;
  private getTrialDetailSubscription: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDivingTrials();
  }
  
  toggleUpdateForm() {
    this.showUpdateForm = !this.showUpdateForm;
  }

  toggleAddTrialForm() {
    this.showAddNewForm = !this.showAddNewForm;
  }

  closeForm() {
    this.showDetail = false;
  }
  retrieveTrial(selectedTrial: Trial): void {
    this.getTrialDetailSubscription = this.dataService.getTrialById<Trial>(selectedTrial.GroupId).subscribe(
      (trialDetail) => this.showTrial(trialDetail),
      (error) => console.log(`error: {error}`)
    );
  }

  showTrial(trial) {
    this.showDetail = true;
    this.trial = trial;
    console.log(this.trial);
  }

  deleteTrial(selectedTrial: Trial) {
    console.log("Delete Selected Trial:");
    console.log(selectedTrial);
    console.log(selectedTrial.GroupId);
    this.getTrialDetailSubscription = this.dataService.deleteTrialById<Trial>(selectedTrial.GroupId).subscribe(
      (trialDetail) => {
        console.log("Successfully Deleted trial.");
      },
      (error) => console.log(`Error Deleting file: {error}`)
    );
  }

  updateTrial($event) {
    console.log("event");
    console.log($event);
    console.log("event.GroupId");
    console.log($event?.GroupId);
    let currentTrial: Trial = {
      GroupId: $event?.GroupId,
      GroupName: $event?.GroupName,
      MaxGroupSize: $event?.MaxGroupSize,
       /* TODO Make Organizations dynamic */
      OrganizationName: "Dock Diving",
      SponsorEmail: $event?.SponsorEmail,
      SponsorName: $event?.SponsorName,
      SponsorPhone: $event?.SponsorPhone,
    }


   
    this.dataService.updateTrial(currentTrial).subscribe(
      trial => {
        console.log("Successfully updated trial");
        console.log(trial);
      }, 
      error => {
        console.log("There was an error");
      });
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
