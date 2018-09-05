import { Component, OnInit } from '@angular/core';

import { Day } from '../../day';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  week: Day[] = [];

  constructor() { }

  ngOnInit() {
  }

}
