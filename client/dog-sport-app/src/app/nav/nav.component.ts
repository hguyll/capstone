import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sports = ['Obedience', 'Scent Work', 'Conformation', 'Dock Diving'];

  constructor() { }

  ngOnInit(): void {
    
  }

}
