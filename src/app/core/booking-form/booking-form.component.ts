import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../models/day';
import { Space } from '../../models/space';
import { Booking } from '../../models/booking';
import { SpaceService } from '../../services/space.service';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  private _day;
  private _bookings;

  @Input()
    set day(day: Day) {
    this._day = (day);
  }

  spaces: Space[];

  constructor(
    private spaceService: SpaceService,
    private bookingService: BookingService
  ) { }

  getSpaces(): void {
    this.spaceService.getSpaces()
      .subscribe(spaces => this.spaces = spaces);
  }

  //TODO booking service should return all data required for each space.
  getBookings(id: number): void {
    this.bookingService.getBookings(id).subscribe(
      bookings => this._bookings = bookings.filter(
        booking => booking.dayId === id)
    );
  }

  updateSpaces(): void {
    if (this._bookings !== undefined) {
      this.spaces.forEach(space => {
        for (let i = 0; i < this._bookings.length; i++) {
          if (space.id === this._bookings[i].spaceId) {
          }
        }
      });
    }
  }

  ngOnInit() {
    this.getSpaces();
  }

  ngOnChanges() {
    console.log(this._day);
    if (this._day !== undefined) {
      this.getBookings(this._day.id);
    }
  }

}
