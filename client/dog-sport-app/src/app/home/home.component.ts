import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Organization } from '../models/organization';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnChanges {
  // sports = ['Dock Diving','Obedience', 'Scent Work', 'Conformation'];
  sports: Array<Organization>;
  showSport: string = '';

  constructor(private dataService: DataService) {
    this.dataService.getAllOrganizations<Organization[]>()
      .subscribe(
        (allSports) => {
          this.sports = allSports;
        }
      );

  }

  toggleShowSport(sport: string) {
    this.showSport = sport;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.showSport)
      console.log("changes!");
  }
  ngOnInit(): void { }

}
