import { Component, OnInit } from '@angular/core';
import { DayService } from '../../services/day.service';
import { Day } from '../../models/day';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  week: Day[];
  selectedDay: Day;

  constructor(private dayService: DayService) { }

  getDays(): void {
    this.dayService.getDays()
      .subscribe(days => this.week = days);
  }

  onSelect(day: Day): void {
    this.selectedDay = day;
  }

  ngOnInit() {
    this.getDays();
  }

}
