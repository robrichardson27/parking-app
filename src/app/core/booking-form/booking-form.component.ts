import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Day } from '../../models/day';
import { ParkingSpaceComponent } from '../parking-space';

// TODO pass day to space service to retrieve spaces on that day
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  @Input() day: Day;

  constructor() { }

  ngOnInit() {
  }

}
