import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Trial } from '../../models/trial';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SportComponent implements OnInit, OnChanges {
  trial: Trial;
  trialList: Trial[];
  showDetail: boolean = false;
  showUpdateForm: boolean = false;
  showAddNewForm: boolean = false;
  @Input() sport: string;
  updatedTrial;
  private getTrialsSubscription: any;
  private getTrialDetailSubscription: any;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    if (this.route) {
      this.sport = this.route.snapshot.paramMap.get('sport')
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    this.getTrials(changes.sport.currentValue);
  }

  ngOnInit(): void {
    this.getTrials(this.sport);
  }

  toggleUpdateForm() {
    this.showUpdateForm = !this.showUpdateForm;
  }

  toggleAddTrialForm() {
    this.router.navigate(['createEvent', this.sport]);
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
    console.log("updating with organization Name");
    console.log($event?.OrganizationName);
    let currentTrial: Trial = {
      GroupId: $event?.GroupId,
      Date: $event?.Date,
      GroupName: $event?.GroupName,
      MaxGroupSize: $event?.MaxGroupSize,
      OrganizationName: $event?.OrganizationName,
      SponsorEmail: $event?.SponsorEmail,
      SponsorName: $event?.SponsorName,
      SponsorPhone: $event?.SponsorPhone,
    }
    console.log(currentTrial);

    this.dataService.updateTrial(currentTrial).subscribe(
      trial => {
        console.log("Successfully updated trial");
        console.log(trial);
      },
      error => {
        console.log("There was an error");
      });
  }

  getTrials(newSport: string) {
    this.getTrialsSubscription = this.dataService.getAllTrials<Trial[]>().subscribe(
      (allTrials) => {
        if (newSport === 'all') {
          this.trialList = allTrials;
        } else {
          this.trialList = allTrials.filter(trials => {
            return trials.OrganizationName === newSport;
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.getTrialsSubscription?.unsubscribe();
    this.getTrialDetailSubscription?.unsubscribe();
  }
}