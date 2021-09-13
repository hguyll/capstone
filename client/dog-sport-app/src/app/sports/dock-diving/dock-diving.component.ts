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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTrials();
  }

  getTrials(): void {
    this.dataService.getAllEvents<Trial[]>().subscribe(
      (allTrials) => {
        console.log(allTrials);
        this.trialList = allTrials.filter(trials => {
          console.log(trials);
          console.log(trials.OrganizationName === "Dock Diving");
          return trials.OrganizationName === "Dock Diving";
        });
      }
    );
  }
}
