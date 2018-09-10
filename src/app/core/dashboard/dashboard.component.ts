import { Component, OnInit } from '@angular/core';
import { DayService } from '../../services/day.service';
import { Day } from '../../models/day';

// TODO: Move below to get_auth service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  week: Day[];
  selectedDay: Day;
  // TODO: Move http constructor to auth Service
  constructor(private dayService: DayService, private http: HttpClient, private router: Router) { }

  getDays(): void {
    this.dayService.getDays()
      .subscribe(days => this.week = days);
  }

  onSelect(day: Day): void {
    this.selectedDay = day;
  }

  // TODO: move get_auth to service
  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('/api/get_auth', httpOptions).subscribe(data => {
      console.log(data);
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['login']);
      }
    });
    this.getDays();
  }
}
