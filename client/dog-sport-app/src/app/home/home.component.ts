import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnChanges {
  sports = ['Dock Diving','Obedience', 'Scent Work', 'Conformation'];
  showSport: string = '';

  constructor() { }

  toggleShowSport(sport: string) {
    this.showSport = sport;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.showSport)
      console.log("changes!");
  }
  ngOnInit(): void {}

}
