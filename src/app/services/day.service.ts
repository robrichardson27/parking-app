import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Day } from '../models/day';
import { DAYS } from '../mocks/mock-days';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor() { }

  getDays(): Observable<Day[]> {
    return of(DAYS);
  }
}
